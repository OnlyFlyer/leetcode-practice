/*
  场景描述：在日常业务开发中，常常会有 供应商选择、人员选择这样的
  需求，服务端一般会提供一个列表接口用户客户端展示下拉选择的数据，
  选择完后，提交对应的 id 到服务端，详情的时候返回 id 或 name，
  客户端回显展示。假定现在需要封装一个人员选择的 UserSelect 组件，前提条件：
  1. 服务端提供一个 api 接口： getUserList 用于查询人员列表（不分页），返回值为 <{id: number, name: string}>[]，可用 fetch('getUserList').then(res => {console.log('人员数据:', res)}) 拿到数据
  2. ** 提交数据只需要传递 id，详情时服务端也只返回 id，但页面展示需要是 name
  3. ** 该列表接口可能别的地方也会使用到
  4. ** UserSelect 仍然是一个 form 组件，可用 form.getFieldDecorator 包裹使用
  5. 可追求更好的用户体验，比如可加上 loading 效果等
  请自行设计，不要求实现文件的个数，没有框架、方案限制，越符合要求且越清晰越简单越好。
*/

// models.js
export const Model = {
  namespace: 'user',
  state: {
    userList: [],
    userMap: {},
  },
  effects: {
    *fetchUserList({ payload = {} }, { put, call }) {
      try {
        const { result: userList = [] } = yield call(getUserList, payload);
        const userMap = userList.reduce(
          (prev, { id, name }) => ({
            ...prev,
            [id]: { id, name },
          }), {});
        yield put({
          type: 'updateState',
          payload: { userList, userMap },
        });
      } catch (err) {
        //
      }
    },
  },

  reducers: {
    updateState(state, { payload = {} } = {}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  subscriptions: {},
};

// user_select.js
import { Select } from 'antd'
function UserSelect(props = {}) {
  const {
    value,
    onChange,
    defaultValue,
    userState: { userList = [], userMap } = {},
    userDispatch,
    loading,
  } = props;
  const dataSource = userList
    .map(({ id, name } = {}) => ({ label: name, value: id }))
  useEffect(() => {
    userDispatch({
      type: 'fetchUserList',
      payload: {}
    })
  }, [])
  return (
    <Select
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      options={dataSource}
      loading={loading}
    />
  )
}

export default connect(
  ({
    user,
    loading: { models = {} } = {},
  } = {}) => ({
    userState: user,
    // dva-loading plugin
    loading: models.user,
  }),
  ({ user } = {}) => ({ userDispatch: user }),
)(UserSelect)

// useage page.js
function Page (props = {}) {
  const { form, userState: { userMap }  = {} } = props;
  const userId = form.getFieldValue('id');
  const userInfo = userMap[userId];
  console.log('userInfo:', userInfo);
  return (
    <Form>
      {form.getFieldDecorator('id')(
        <UserSelect />
      )}
    </Form>
  )
}
connect(({ user }) => ({ userState: user }))(Page)
