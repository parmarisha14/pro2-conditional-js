 let invest_range = document.getElementById("invest_Range");
    let rate_range = document.getElementById("rate_Range");
    let time_range = document.getElementById("time_Range");
    let invest_value = document.getElementById("monthlyDisplay");
    let rate_value = document.getElementById("rateDisplay");
    let time_value = document.getElementById("yearsDisplay");
    let invest_amount = document.getElementById("invest_Amount");
    let est_return = document.getElementById("est_Return");
    let total_val = document.getElementById("total_Interest");

    invest_range.value = 25000;
    rate_range.value = 12;
    time_range.value = 10;

    invest_value.innerText = invest_range.value;
    rate_value.innerText = rate_range.value;
    time_value.innerText = time_range.value;

    let chart;

    function renderChart(invested, returns) {
      const data = {
        labels: ["Invested", "Returns"],
        datasets: [{
          data: [invested, returns],
          backgroundColor: ["#e0eafc", "#647dee"],
          borderWidth: 0
        }]
      };

      const config = {
        type: "doughnut",
        data: data,
        options: {
          cutout: "70%",
          responsive: false,
          plugins: {
            legend: { display: false }
          }
        }
      };

      if (chart) {
        chart.data.datasets[0].data = [invested, returns];
        chart.update();
      } else {
        const ctx = document.getElementById("myChart").getContext("2d");
        chart = new Chart(ctx, config);
      }
    }

    function updateSIPFields() {
      const P = parseFloat(invest_range.value);
      const r = parseFloat(rate_range.value) / 100 / 12;
      const n = parseFloat(time_range.value) * 12;
      const invested = P * n;
      const maturity = r > 0 ? P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r) : invested;
      const returns = maturity - invested;

      invest_value.innerText = P.toLocaleString("en-IN");
      rate_value.innerText = parseFloat(rate_range.value).toFixed(1);
      time_value.innerText = parseInt(time_range.value);

      invest_amount.innerText = "₹" + invested.toLocaleString("en-IN", { maximumFractionDigits: 0 });
      est_return.innerText = "₹" + returns.toLocaleString("en-IN", { maximumFractionDigits: 0 });
      total_val.innerText = "₹" + maturity.toLocaleString("en-IN", { maximumFractionDigits: 0 });

      renderChart(invested, returns);
    }

    function handleChange() {
      updateSIPFields();
    }

    updateSIPFields(); 