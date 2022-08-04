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

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function (s) {
    let maxLen = 0;
    let maxStr = '';
    const n = s.length;
    if (n < 2) return s;
    let dp = Array.from(new Array(n), () => new Array(n).fill(null));
    for (let j=1; j<n; j++) {
      for (let i = 0; i<=j; i++) {
        if (i === j) {
          dp[i][j] = true;
        } else if (s[i] !== s[j]) {
          dp[i][j] = false;
        } else {
          if (j-i < 3) {
            dp[i][j] = true;
          } else {
            dp[i][j] = dp[i+1][j-1];
          }
        }
        if (dp[i][j] && j-i+1 > maxLen) {
          maxLen = j-i+1;
          maxStr = s.slice(i, j+1);
        }
      }
    }
    return maxStr;
  };