import React, { useState } from "react";
import styles from "./index.module.css";
import Navbar from "../../Components/Navbar";
const CalcTruckingForm = () => {
  const [val, setVal] = useState({
    AverageloadedEmptyMiles: "",
    GrossRevenueMonthly: "",
    trunckPayment: "",
    truckInsurance: "",
    trailerPayment: "",
    licencePlates: "",
    permits: "",
    parking: "",
    oilChangeMaintainance: "",
    generalRepair: "",
    roadsideService: "",
    tires: "",
    mealsLodging: "",
    claimsUnpaidRevenue: "",
    ifta: "",
    accountingForCorp: "",
    driverPayMile: "",
    averagePerGallon: "",
    averageCostGallon: "",
    AnnualIncomeTaxReserve: "",
    payrollTaxes: "",
    ooDeductions: "",
  });

  const cleanInput = (inp) => {
    if (inp) {
      return inp.replace(/(?!-)[^0-9.]/g, "").replace("-", "");
    } else {
      return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("val", val);
    // Make payload and API calling and further functionality on form submit here from below after installing axios
    // axios.get().then()

    // Or if user want to multiply the values then first mutiply the values one by one then make payload ex below
    let mul1 = val?.firstInput * 1234;
    // then add the mul1 value in the payload where required
    let mul2 = val?.secondInput * 456;
    // Same add mul2 value as required
  };

  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const keyPressHanlder = (event, parameter) => {
    const { key } = event;
    setVal((prevValue) => {
      return {
        ...prevValue,
        [parameter]:
          key !== "Backspace"
            ? !Number.isNaN(parseInt(key)) || key === "," || key === "."
              ? prevValue?.[parameter] + key
              : prevValue?.[parameter]
            : prevValue?.[parameter]?.substring(
                0,
                prevValue?.[parameter]?.length - 1
              ),
      };
    });
  };

  let monthlyTotal = 0;

  const totalAmount = () => {
    let newArray = [
      Number(val?.trunckPayment),
      Number(val?.truckInsurance) / Number(12),
      Number(val?.trailerPayment),
      Number(
        Number(val?.licencePlates) > 0
          ? Number(val?.licencePlates) / Number(12)
          : 0
      ),
      Number(val?.permits) / Number(12),
      Number(val?.parking) / Number(12),
      Number(val?.oilChangeMaintainance) / Number(12),
      Number(val?.generalRepair) / Number(12),
      Number(val?.roadsideService) / Number(12),
      Number(val?.tires) / Number(12),
      Number(Number(val?.GrossRevenueMonthly) * Number(12) * Number(5 / 100)) /
        Number(12),
      Number(Number(val?.GrossRevenueMonthly) * Number(12) * Number(3 / 100)) /
        Number(12),
      Number(val?.mealsLodging),
      Number(val?.claimsUnpaidRevenue) / Number(12),
      Number(val?.ifta) / Number(12),
      Number(val?.accountingForCorp) / Number(12),
      Number(val?.payrollTaxes) / Number(12),
      Number(val?.AnnualIncomeTaxReserve) / Number(12),
    ];

    let totalNumber = 0;
    newArray?.forEach((items) => {
      totalNumber += items;
    });
    monthlyTotal = totalNumber;
    return totalNumber;
  };

  const totalExpensePermile = () => {
    let arrTotalExpensePermile = [
      Number(monthlyTotal) +
        Number(
          Number(val?.driverPayMile) * Number(val?.AverageloadedEmptyMiles)
        ) +
        (Number(val?.AverageloadedEmptyMiles) / Number(val?.averagePerGallon)) *
          Number(val?.averageCostGallon),
    ];
    let amountExpMiles =
      arrTotalExpensePermile / Number(val?.AverageloadedEmptyMiles);

    if (isNaN(amountExpMiles)) {
      return 0;
    } else {
      if (amountExpMiles === Infinity) {
        return 0;
      } else {
        return amountExpMiles;
      }
    }
  };

  const totalSavingFleetTrunck = () => {
    let arrTotalSavingFleetTrunck =
      Number(val?.GrossRevenueMonthly) - totalMonthlyExpenses();

    if (isNaN(arrTotalSavingFleetTrunck)) {
      return 0;
    } else {
      // console.log("arrTotalSavingFleetTrunck", arrTotalSavingFleetTrunck);
      if (arrTotalSavingFleetTrunck === Infinity) {
        return 0;
      } else {
        return arrTotalSavingFleetTrunck;
      }
    }
  };
  const totalMonthlyExpenses = () => {
    let amountOfTotalMonthlyExpenses =
      totalAmount() +
      Number(
        Number(val?.driverPayMile) * Number(val?.AverageloadedEmptyMiles)
      ) +
      (Number(val?.AverageloadedEmptyMiles) / Number(val?.averagePerGallon)) *
        Number(val?.averageCostGallon);

    if (isNaN(amountOfTotalMonthlyExpenses)) {
      return 0;
    } else {
      if (amountOfTotalMonthlyExpenses === Infinity) {
        return 0;
      } else {
        return amountOfTotalMonthlyExpenses;
      }
    }
  };

  const totalSavingOwnerOperator = () => {
    let MultiplyOfSavingFleetAndDriverPay = Number(
      Number(val?.driverPayMile) * Number(val?.AverageloadedEmptyMiles)
    );

    let amountOfSavingOwnerOperator = totalSavingFleetTrunck();
    let newTotal =
      amountOfSavingOwnerOperator + MultiplyOfSavingFleetAndDriverPay;

    if (isNaN(newTotal)) {
      return 0;
    } else {
      return newTotal;
    }
  };
  const totalOwnerOperatorYearlyIncome = () => {
    let savingOperator = totalSavingOwnerOperator();
    let amountOwnerOperatorYearlyIncome = savingOperator * 12;
    if (isNaN(amountOwnerOperatorYearlyIncome)) {
      return 0;
    } else {
      if (amountOwnerOperatorYearlyIncome === Infinity) {
        return 0;
      } else {
        return amountOwnerOperatorYearlyIncome;
      }
    }
  };

  const totalTaxableIncome = () => {
    let ownerOprYrlyIncome = totalOwnerOperatorYearlyIncome();
    let amountTaxableIncome = ownerOprYrlyIncome - Number(val?.ooDeductions);
    if (isNaN(amountTaxableIncome)) {
      return 0;
    } else {
      if (amountTaxableIncome === Infinity) {
        return 0;
      } else {
        return amountTaxableIncome;
      }
    }
  };
  const totalFederalIncomeTax = () => {
    let TaxableIncomee = totalTaxableIncome();
    let amountFederalIncome = (TaxableIncomee * 18) / 100;
    if (isNaN(amountFederalIncome)) {
      return 0;
    } else {
      if (amountFederalIncome === Infinity) {
        return 0;
      } else {
        return amountFederalIncome;
      }
    }
  };
  const totalNetIncomeYearly = () => {
    let amounttOfTaxableIncome = totalTaxableIncome();
    let amtOfFederalIncometx = totalFederalIncomeTax();
    let netIncomeYearlyAmt = amounttOfTaxableIncome - amtOfFederalIncometx;
    if (isNaN(netIncomeYearlyAmt)) {
      return 0;
    } else {
      if (netIncomeYearlyAmt === Infinity) {
        return 0;
      } else {
        return netIncomeYearlyAmt;
      }
    }
  };
  const totalAverageNetMonthlyIncome = () => {
    let ntIncomeYearly = totalNetIncomeYearly();
    let amountIncomeYear = ntIncomeYearly / 12;
    if (isNaN(amountIncomeYear)) {
      return 0;
    } else {
      if (amountIncomeYear === Infinity) {
        return 0;
      } else {
        return amountIncomeYear;
      }
    }
  };

  const totalDieselGaloonsMonthly = () => {
    let amountDieselGaloonsMonthly =
      Number(val?.AverageloadedEmptyMiles) / Number(val?.averagePerGallon);

    if (isNaN(amountDieselGaloonsMonthly)) {
      return 0;
    } else {
      if (amountDieselGaloonsMonthly === Infinity) {
        return 0;
      } else {
        return amountDieselGaloonsMonthly;
      }
    }
  };
  const totalDriverPerMile = () => {
    let amtDriverPerMile =
      Number(val?.driverPayMile) * Number(val?.AverageloadedEmptyMiles);

    if (isNaN(amtDriverPerMile)) {
      return 0;
    } else {
      if (amtDriverPerMile === Infinity) {
        return 0;
      } else {
        return amtDriverPerMile;
      }
    }
  };
  const DieselMonth = () => {
    let DieselGalons = totalDieselGaloonsMonthly();
    let amountDiselGalonsMonth = DieselGalons * Number(val?.averageCostGallon);
    if (isNaN(amountDiselGalonsMonth)) {
      return 0;
    } else {
      if (amountDiselGalonsMonth === Infinity) {
        return 0;
      } else {
        return amountDiselGalonsMonth;
      }
    }
  };
  const totalDispatchFees = () => {
    let monthlyGrossRevenue = Number(val?.GrossRevenueMonthly);
    let newAmountOfTotalDispatchFees = (monthlyGrossRevenue * 5) / 100;
    if (isNaN(newAmountOfTotalDispatchFees)) {
      return 0;
    } else {
      if (newAmountOfTotalDispatchFees === Infinity) {
        return 0;
      } else {
        return newAmountOfTotalDispatchFees;
      }
    }
  };
  const totalFactoryAndBankFees = () => {
    let amountOfGrossRevenue = Number(val?.GrossRevenueMonthly);
    let amountOfTotalFactoryAndBankFees = (amountOfGrossRevenue * 3) / 100;
    if (isNaN(amountOfTotalFactoryAndBankFees)) {
      return 0;
    } else {
      if (amountOfTotalFactoryAndBankFees === Infinity) {
        return 0;
      } else {
        return amountOfTotalFactoryAndBankFees;
      }
    }
  };
  const totalRevenuePerMile = () => {
    let amountRevenuee = Number(val?.GrossRevenueMonthly);

    let amountAvgLoad = Number(val?.AverageloadedEmptyMiles);

    let finalAmountOfRevenuePerMile = amountRevenuee / amountAvgLoad;
    if (isNaN(finalAmountOfRevenuePerMile)) {
      return 0;
    } else {
      if (finalAmountOfRevenuePerMile === Infinity) {
        return 0;
      } else {
        return finalAmountOfRevenuePerMile;
      }
    }
  };
  return (
    <div className={`${styles.mainCalFormContainer}`}>
      <div
      // className={`${styles.formContainer}`}
      >
        <div className={`${styles.InnerForm}`}>
          <form onSubmit={handleSubmit}>
            <Navbar />
            <div className={`${styles.grid}`}>
              <div>
                {/* Grid first part */}
                <div className={`${styles.subGrid}`}>
                  <div>
                    {/* First input */}
                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Average loaded & Empty Miles
                      </label>

                      <span className={`${styles.spanWithoutInput}`}>
                        <input
                          className={`${styles.inputFieldWithout}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return {
                                ...prev,
                                AverageloadedEmptyMiles: value,
                              };
                            });
                          }}
                          value={val?.AverageloadedEmptyMiles}
                          type={"text"}
                          name="AverageloadedEmptyMiles"
                          required
                        />
                      </span>
                    </div>
                    {/* Second input */}
                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Monthly Gross Revenue
                      </label>
                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, GrossRevenueMonthly: value };
                            });
                          }}
                          value={val?.GrossRevenueMonthly}
                          type={"text"}
                          name="GrossRevenueMonthly"
                          required
                        />
                      </span>
                    </div>
                    {/* <label>Average Rate Per Mile</label> */}
                    {/* <div>
                  {Number(val?.GrossRevenueMonthly) /
                    Number(val?.AverageloadedEmptyMiles) || 0}
                </div> */}
                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Driver Pay/Mile
                      </label>
                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, driverPayMile: value };
                            });
                          }}
                          value={val?.driverPayMile}
                          type={"text"}
                          name="driverPayMile"
                          required
                        />
                      </span>
                    </div>
                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Average Per Gallon
                      </label>
                      <span className={`${styles.spanWithoutInput}`}>
                        <input
                          className={`${styles.inputFieldWithout}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, averagePerGallon: value };
                            });
                          }}
                          value={val?.averagePerGallon}
                          type={"text"}
                          name="averagePerGallon"
                          required
                        />
                      </span>
                    </div>
                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Average Cost/Gallon
                      </label>
                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, averageCostGallon: value };
                            });
                          }}
                          value={val?.averageCostGallon}
                          type={"text"}
                          name="averageCostGallon"
                          required
                        />
                      </span>
                    </div>
                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Yearly Truck Insurance
                      </label>
                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, truckInsurance: value };
                            });
                          }}
                          value={val?.truckInsurance}
                          type={"text"}
                          name="truckInsurance"
                          required
                        />
                      </span>
                      {/* <div>MONTHLY {Number(val?.truckInsurance) / Number(12)}</div> */}
                    </div>

                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        {" "}
                        Monthly Truck Payment
                      </label>

                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, trunckPayment: value };
                            });
                          }}
                          value={val?.trunckPayment}
                          type={"text"}
                          name="trunckPayment"
                          required
                        />
                      </span>
                    </div>

                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Monthly Trailer Payment
                      </label>
                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, trailerPayment: value };
                            });
                          }}
                          value={val?.trailerPayment}
                          type={"text"}
                          name="trailerPayment"
                          required
                        />
                      </span>
                    </div>
                  </div>

                  {/*Grid second part */}
                  <div>
                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Yearly Licence Plates
                      </label>
                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, licencePlates: value };
                            });
                          }}
                          value={val?.licencePlates}
                          type={"text"}
                          name="licencePlates"
                          required
                        />
                      </span>

                      {/* <div>MONTHLY {Number(val?.licencePlates) / Number(12)}</div> */}
                    </div>
                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Yearly Permits & Fees
                      </label>
                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, permits: value };
                            });
                          }}
                          value={val?.permits}
                          type={"text"}
                          name="permits"
                          required
                        />
                      </span>

                      {/* <div>MONTHLY {Number(val?.permits) / Number(12)}</div> */}
                    </div>
                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Monthly Parking
                      </label>
                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, parking: value };
                            });
                          }}
                          value={val?.parking}
                          type={"text"}
                          name="parking"
                          required
                        />
                      </span>
                      {/* <div>MONTHLY {Number(val?.parking) / Number(12)}</div> */}
                    </div>
                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Monthly Oil Changes
                      </label>
                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, oilChangeMaintainance: value };
                            });
                          }}
                          value={val?.oilChangeMaintainance}
                          type={"text"}
                          name="oilChangeMaintainance"
                          required
                        />
                      </span>

                      <div>
                        {/* MONTHLY {Number(val?.oilChangeMaintainance) / Number(12)} */}
                      </div>
                    </div>

                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Monthly ELD/Loardboard/cell phone
                      </label>
                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, generalRepair: value };
                            });
                          }}
                          value={val?.generalRepair}
                          type={"text"}
                          name="generalRepair"
                          required
                        />
                      </span>

                      {/* <div>MONTHLY {Number(val?.generalRepair) / Number(12)}</div> */}
                    </div>

                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Monthly Average Repair
                      </label>
                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, roadsideService: value };
                            });
                          }}
                          value={val?.roadsideService}
                          type={"text"}
                          name="roadsideService"
                          required
                        />
                      </span>

                      {/* <div>monthly {Number(val?.roadsideService) / Number(12)}</div> */}
                    </div>

                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Monthly Tires{" "}
                      </label>
                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, tires: value };
                            });
                          }}
                          value={val?.tires}
                          type={"text"}
                          name="tires"
                          required
                        />
                      </span>

                      {/* <div>MONTHLY {Number(val?.tires) / Number(12)}</div> */}
                    </div>

                    {/* <label>Factoring Fee / Bank Fee</label>
                <div>
                  Annual{" "}
                  {Number(val?.GrossRevenueMonthly) *
                    Number(12) *
                    Number(3 / 100)}
                </div>

                <div>
                  monthly{" "}
                  {(Number(val?.GrossRevenueMonthly) *
                    Number(12) *
                    Number(3 / 100)) /
                    Number(12)}
                </div> */}

                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}> Yearly IFTA </label>

                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, ifta: value };
                            });
                          }}
                          value={val?.ifta}
                          type={"text"}
                          name="ifta"
                          required
                        />
                      </span>

                      {/* <div>monthly {Number(val?.ifta) / Number(12)}</div> */}
                    </div>

                    {/* <div style={{ marginBottom: "20px" }}>
                      total monthly
                      {totalAmount()}
                    </div> */}
                  </div>

                  {/* Grid third part */}

                  <div className={styles.imageBox}>
                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Yearly Accounting for Corp
                      </label>
                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, accountingForCorp: value };
                            });
                          }}
                          value={val?.accountingForCorp}
                          type={"text"}
                          name="accountingForCorp"
                          required
                        />
                      </span>
                      <div>
                        {/* monthly {Number(val?.accountingForCorp) / Number(12)} */}
                      </div>
                    </div>
                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Monthly Meals/Loging
                      </label>
                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, mealsLodging: value };
                            });
                          }}
                          value={val?.mealsLodging}
                          type={"text"}
                          name="mealsLodging"
                          required
                        />
                      </span>
                    </div>
                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Yearly Claims & unpaid Revenue
                      </label>
                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, claimsUnpaidRevenue: value };
                            });
                          }}
                          value={val?.claimsUnpaidRevenue}
                          type={"text"}
                          name="claimsUnpaidRevenue"
                          required
                        />
                      </span>

                      {/* <div>
                    monthly {Number(val?.claimsUnpaidRevenue) / Number(12)}
                  </div> */}
                    </div>
                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>Payroll Taxes</label>
                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, payrollTaxes: value };
                            });
                          }}
                          value={val?.payrollTaxes}
                          type={"text"}
                          name="payrollTaxes"
                          required
                        />
                      </span>

                      {/* <div>MONTHLY {Number(val?.payrollTaxes) / Number(12)}</div> */}
                    </div>

                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Annual Income Tax Reserve
                      </label>
                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, AnnualIncomeTaxReserve: value };
                            });
                          }}
                          value={val?.AnnualIncomeTaxReserve}
                          type={"text"}
                          name="AnnualIncomeTaxReserve"
                          required
                        />
                      </span>

                      {/* <div>{Number(val?.AnnualIncomeTaxReserve) / Number(12)}</div> */}
                    </div>

                    {/* <label>Diesel Gallon/month</label>
                <div>
                  Annual
                  {Number(val?.AverageloadedEmptyMiles) /
                    Number(val?.averagePerGallon)}
                </div> */}

                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>OO Deductions</label>
                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          onChange={(e) => {
                            const value = cleanInput(e.target.value.toString());
                            setVal((prev) => {
                              return { ...prev, ooDeductions: value };
                            });
                          }}
                          value={val?.ooDeductions}
                          type={"text"}
                          name="ooDeductions"
                          required
                        />
                      </span>
                    </div>
                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Federal Income Tax
                      </label>
                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          value={totalFederalIncomeTax()?.toFixed(2)}
                          type={"text"}
                        />
                      </span>

                      {/* <div>${totalFederalIncomeTax().toFixed(2) || 0}</div> */}
                    </div>
                    <div className={`${styles.subContainer}`}>
                      <label className={`${styles.label}`}>
                        Net Income Yearly
                      </label>

                      <span className={`${styles.spanInput}`}>
                        $
                        <input
                          className={`${styles.inputField}`}
                          value={totalNetIncomeYearly()?.toFixed(2)}
                          type={"text"}
                        />
                      </span>

                      {/* ${totalNetIncomeYearly().toFixed(2) || 0}</div> */}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <button
                    type={"Clear"}
                    value="Clear"
                    className={`${styles.submitBtn}`}
                    onClick={() => {
                      setVal({
                        AverageloadedEmptyMiles: "",
                        GrossRevenueMonthly: "",

                        trunckPayment: "",
                        truckInsurance: "",
                        trailerPayment: "",
                        licencePlates: "",
                        permits: "",
                        parking: "",
                        oilChangeMaintainance: "",
                        generalRepair: "",
                        roadsideService: "",
                        tires: "",
                        mealsLodging: "",
                        claimsUnpaidRevenue: "",
                        ifta: "",
                        accountingForCorp: "",
                        driverPayMile: "",
                        averagePerGallon: "",
                        averageCostGallon: "",
                        AnnualIncomeTaxReserve: "",
                        payrollTaxes: "",
                        ooDeductions: "",
                      });
                    }}
                  >
                    clear
                  </button>
                </div>
              </div>

              {/* Output display */}
              <div className={`${styles.outputContainer}`}>
                <h1 className={`${styles.outputHeading}`}>Output</h1>

                <div className={`${styles.subOutput}`}>
                  <label className={`${styles.OutPutlabel}`}>
                    Driver Pay/Mile
                  </label>
                  <div className={`${styles.outputResult}`}>
                    ${totalDriverPerMile().toFixed(2)}
                    {/* {Number(
                      Number(val?.driverPayMile) *
                        Number(val?.AverageloadedEmptyMiles)
                    ) || 0} */}
                  </div>
                </div>

                <div className={`${styles.subOutput}`}>
                  <label className={`${styles.OutPutlabel}`}>
                    Diesel Gallons/Month
                  </label>
                  <div className={`${styles.outputResult}`}>
                    {totalDieselGaloonsMonthly().toFixed(2)}
                    {/* {isNaN(
                      Number(val?.AverageloadedEmptyMiles) /
                        Number(val?.averagePerGallon)
                    )
                      ? 0
                      : Number(
                          Number(val?.AverageloadedEmptyMiles) /
                            Number(val?.averagePerGallon)
                        )} */}
                  </div>
                </div>
                <div className={`${styles.subOutput}`}>
                  <label className={`${styles.OutPutlabel}`}>
                    Total Diesel/Month
                  </label>
                  <div className={`${styles.outputResult}`}>
                    ${DieselMonth().toFixed(2) || 0}{" "}
                  </div>
                </div>
                <div className={`${styles.subOutput}`}>
                  <label className={`${styles.OutPutlabel}`}>
                    Total Monthly Expense
                  </label>
                  <div className={`${styles.outputResult}`}>
                    ${totalMonthlyExpenses().toFixed(2) || 0}
                  </div>
                </div>
                <div className={`${styles.subOutput}`}>
                  <label className={`${styles.OutPutlabel}`}>
                    Revenue Per Mile
                  </label>
                  <div className={`${styles.outputResult}`}>
                    ${totalRevenuePerMile().toFixed(2)}
                  </div>
                </div>
                <div className={`${styles.subOutput}`}>
                  <label className={`${styles.OutPutlabel}`}>
                    Expense Per Mile
                  </label>
                  <div
                    className={`${styles.outputResult}`}
                    style={{
                      color:
                        totalExpensePermile().toFixed(2) >
                        totalRevenuePerMile().toFixed(2)
                          ? "red"
                          : "",
                    }}
                  >
                    ${totalExpensePermile().toFixed(2)}
                    {/* {Number(
                      totalExpensePermile() /
                        Number(val?.AverageloadedEmptyMiles)
                    ).toFixed(2) || 0} */}
                  </div>
                </div>
                <div className={`${styles.subOutput}`}>
                  <label className={`${styles.OutPutlabel}`}>
                    dispatch Fee
                  </label>
                  <div className={`${styles.outputResult}`}>
                    ${totalDispatchFees().toFixed(2)}
                  </div>
                  {/* <div>
                  Annual
                  {Number(val?.GrossRevenueMonthly) *
                    Number(12) *
                    Number(5 / 100)}
                </div> */}

                  {/* <div>
                  monthly
                  {(Number(val?.GrossRevenueMonthly) * Number(5 / 100)) /
                    Number(12)}
                </div> */}
                </div>
                <div className={`${styles.subOutput}`}>
                  <label className={`${styles.OutPutlabel}`}>
                    {" "}
                    Factoring Fee / Bank Fees
                  </label>
                  <div className={`${styles.outputResult}`}>
                    ${totalFactoryAndBankFees().toFixed(2)}
                  </div>
                </div>
                <div className={`${styles.subOutput}`}>
                  <label className={`${styles.OutPutlabel}`}>
                    Saving / Fleet Truck
                  </label>

                  <div
                    style={{ color: totalSavingFleetTrunck() < 0 ? "red" : "" }}
                    className={`${styles.outputResult}`}
                  >
                    ${totalSavingFleetTrunck().toFixed(2) || 0}
                  </div>
                </div>

                <div className={`${styles.subOutput}`}>
                  <label className={`${styles.OutPutlabel}`}>
                    Saving Owner Operator
                  </label>
                  <div className={`${styles.outputResult}`}>
                    ${totalSavingOwnerOperator().toFixed(2) || 0}
                  </div>
                </div>

                <div className={`${styles.subOutput}`}>
                  <label className={`${styles.OutPutlabel}`}>
                    Owner Operator Yearly Income
                  </label>
                  <div className={`${styles.outputResult}`}>
                    ${totalOwnerOperatorYearlyIncome().toFixed(2) || 0}
                  </div>
                </div>
                <div className={`${styles.subOutput}`}>
                  <label className={`${styles.OutPutlabel}`}>
                    Taxable Income
                  </label>
                  <div className={`${styles.outputResult}`}>
                    ${totalTaxableIncome().toFixed(2) || 0}
                  </div>
                </div>

                <div className={`${styles.subOutput}`}>
                  <label className={`${styles.OutPutlabel}`}>
                    Average Net Monthly Income
                  </label>
                  <div className={`${styles.outputResult}`}>
                    ${totalAverageNetMonthlyIncome().toFixed(2) || 0}{" "}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CalcTruckingForm;
