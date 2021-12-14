// Forum #3

// Find the minimum sum of costs to reach the nth step
const climbingStairs = (cost) => {
    // Get the length of the cost array (how many steps)
    let n = cost.length
    let dp = new Array(n).fill(0); // Fill the array with 0's per n steps

    // Fill default case (first step)
    dp[0] = cost[0]
    dp[1] = cost[1]

    // Iterate from 2, add to this cost
    for(let i = 2; i<n; i++) {
        dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2])
    }

    // Return minimum of last 2 integers 
    return Math.min(...dp.slice(-2))
}

// Test with cases
console.log(climbingStairs([0,2,2,1]))  // Returns 2
console.log(climbingStairs([0, 2, 3, 2])) // Returns 3
console.log(climbingStairs([10,15,20]))  // Returns 15
console.log(climbingStairs([0, 0, 0, 0, 0, 0])) // Returns 0

