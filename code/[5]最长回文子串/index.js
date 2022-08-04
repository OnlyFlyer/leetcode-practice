/**
 * @param {string} str
 * @return {string}
 */

// 给你一个字符串 s，找到 s 中最长的回文子串, 有多个子字符串符合要求时，返回第一个符合的即可
// 回文字符串：一个正读和反读都一样的字符串。
// 示例1：
 
// 输入：str = 'babad'
// 输出：'bab'
 
// 示例2:
 
// 输入：str = 'cbbd'
// 输出：'bb'

const checkResult = (flag, testItem) => {
    if (flag) {
        console.log('通过')
    } else {
        console.log(`${testItem}没有通过`)
    }
}

const longestPalindrome = (str) => {
    const letterList = str.split('')
    let res = ''
    for (let i = 0; i < letterList.length; i++) {
        for (let j = i + 1; j < letterList.length; j++) {
            const snippet = letterList.slice(i, j + 1)
            const orderStr = snippet.join('')
            const reverseStr = snippet.reverse().join('')

            if ((orderStr === reverseStr) && res.length < orderStr.length) {
                res = orderStr
            }
        }
    }

    return res
}

const test1 = () => {
    const str = 'babad'
    const res = longestPalindrome(str)
    const correctRes = 'bab'
    console.log('res>>>', res)
    checkResult(correctRes === res, 'test1')
}

const test2 = () => {
    const str = 'cbbd'
    const res = longestPalindrome(str)
    const correctRes = 'bb'
    checkResult(correctRes === res, 'test2')
}

const test3 = () => {
    const str = 'ahdscsdhamas'
    const res = longestPalindrome(str)
    const correctRes = 'ahdscsdha'
    checkResult(correctRes === res, 'test3')
}

const main = () => {
    test1()
    test2()
    test3()
}

main()