// app.js

function calculateRecoveryPeriod() {
    // フォームから値を取得
    const similarStore = document.getElementById('similar-store').value;
    const initialInvestment = parseFloat(document.getElementById('initial-investment').value);
    const monthlyRent = parseFloat(document.getElementById('monthly-rent').value);
    const contractArea = parseFloat(document.getElementById('contract-area').value);
    const contractPeriod = parseFloat(document.getElementById('contract-period').value);
    const monthlyExpense = parseFloat(document.getElementById('monthly-expense').value);
    const monthlySales = parseFloat(document.getElementById('monthly-sales').value);

    // 月間総コストを計算
    const totalMonthlyCost = monthlyRent + monthlyExpense;

    // 月間利益を計算
    const monthlyProfit = monthlySales - totalMonthlyCost;

    // 投資回収期間を計算
    let recoveryPeriod;
    if (monthlyProfit > 0) {
        recoveryPeriod = initialInvestment / monthlyProfit;
    } else {
        recoveryPeriod = "回収不能";
    }

    // 結果を表示
    const resultElement = document.getElementById('result');
    resultElement.textContent = `類似店舗: ${similarStore}\n投資回収期間は ${recoveryPeriod} ヶ月です。`;
}
