function calculate(){
    let monthIncome = +document.getElementById("month-salary").value;
    let rank = document.getElementById("rank").value;
    let yearIncome;
    if (monthIncome < 10000000){
        switch (rank){
            case "1":
              yearIncome = (6 * monthIncome) + (3 * monthIncome * 90 / 100) + (3 * monthIncome * 80 / 100);
                break
            case "2":
              yearIncome = (3 * monthIncome) + (3 * monthIncome * 90 / 100) + (6 * monthIncome * 80 / 100);
                break
        }
    }else if (monthIncome < 50000000){
        switch (rank){
            case "1":
                yearIncome =((6 * monthIncome) + (3 * monthIncome * 90 / 100) + (3 * monthIncome * 80 / 100)) * 90 / 100;
                break
            case "2":
                yearIncome = ((3 * monthIncome) + (3 * monthIncome * 90 / 100) + (6 * monthIncome * 80 / 100)) * 90 / 100;
                break
        }
    }else{
        switch (rank){
            case "1":
                yearIncome =(((6 * monthIncome) + (3 * monthIncome * 90 / 100) + (3 * monthIncome * 80 / 100)) * 80 / 100) * 90 / 100;
                break
            case "2":
                yearIncome = (((3 * monthIncome) + (3 * monthIncome * 90 / 100) + (6 * monthIncome * 80 / 100)) * 80 / 100) * 90 / 100;
                break
        }
    }
    document.getElementById("gross-income").innerHTML = yearIncome
}

