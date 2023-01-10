import React, { useState } from "react";

const Calculator = () => {
  const [val, setVal] = useState({
    AverageloadedEmptyMiles: "",
    GrossRevenueMonthly: "",
    // AverageRatePerMile: "",
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

    console.log("val", val);
    // Make payload and API calling and further functionality on form submit here from below after installing axios
    // axios.get().then()

    // Or if user want to multiply the values then first mutiply the values one by one then make payload ex below
    let mul1 = val?.firstInput * 1234;
    // then add the mul1 value in the payload where required
    let mul2 = val?.secondInput * 456;
    // Same add mul2 value as required
  };

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div
      // className={`${styles.formContainer}`}
      >
        <div>
          <form onSubmit={handleSubmit}>
            {/* Grid first part */}
            <div>
              {/* Sub grid first part */}
              <div>
                <div style={{ marginBottom: "30Px" }}>
                  {/* First input */}
                  <label style={{ marginRight: "50px" }}>
                    Average loaded & Empty Miles
                  </label>

                  <input
                    onChange={(e) => {
                      const value = cleanInput(e.target.value.toString());

                      setVal((prev) => {
                        return { ...prev, AverageloadedEmptyMiles: value };
                      });
                    }}
                    value={val?.AverageloadedEmptyMiles}
                    type={"text"}
                    name="AverageloadedEmptyMiles"
                    autoComplete="off"
                    required
                  />

                  {/* Second input */}
                  <label>Gross Revenue Monthly</label>
                  <span
                    className="currencyinput"
                    style={{ border: "1px inset #ccc" }}
                  >
                    $
                    <input
                      style={{ border: "none" }}
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
                  <label>Average Rate Per Mile</label>
                  <div>
                    {Number(val?.AverageloadedEmptyMiles) /
                      Number(val?.GrossRevenueMonthly) || 0}
                  </div>

                  <label>Truck Insurance</label>
                  <input
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
                  <div>{Number(val?.truckInsurance) / Number(12)}</div>

                  {/* j hgligli */}

                  <label>Trunck Payment</label>
                  <input
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
                  <div>{}</div>

                  <label> Trailer Payment</label>
                  <input
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
                  <div>{}</div>

                  <label>Licence Plates</label>
                  <input
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
                  <div>{}</div>
                  <label>Permits</label>
                  <input
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

                  <label>Parking</label>
                  <input
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

                  <label>Oil Change/Maintainance</label>
                  <input
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

                  <label>General Repair</label>
                  <input
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

                  <label>Roadside Service</label>
                  <input
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

                  <label>Tires</label>
                  <input
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
                  <div>{}</div>
                  <label>dispatch Fee</label>
                  <div>{}</div>
                  <div>{}</div>
                  <label>Factoring Fee / Bank Fee</label>
                  <div>{}</div>
                  <div>{}</div>

                  <label>Meals/Lodging</label>
                  <input
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

                  <label>Claims and unpaid Revenue</label>
                  <input
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
                  <div>{}</div>

                  <label>IFTA</label>
                  <input
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
                  <div>{}</div>

                  <label>Accounting for Corp</label>
                  <input
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
                  <div>{}</div>
                  <label>Payroll Taxes</label>
                  <div>{}</div>
                  <label>Annual Incom Tax Reserve</label>
                  <div>{}</div>
                </div>

                {/*Sub Grid second part */}
                <div>
                  {/* Third input */}

                  <label>Driver Pay/Mile</label>
                  <input
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
                  <div>{}</div>
                  <label>Average Per Gallon</label>
                  <input
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
                  <label>Diesel Gallon/month</label>
                  <div>{}</div>
                  <label>Average Cost/Gallon</label>
                  <input
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
                  <label>Total Diesel/month</label>
                  <div>{}</div>
                  <label>Total Month Expense</label>
                  <div></div>
                  <label>Expense Per Mile</label>
                  <div>{}</div>
                  <label>Saving / Fleet Trunck</label>
                  <div></div>
                  <label>Saving Owner Operator</label>
                  <div></div>
                  <label>Owner Operator Year Income</label>
                  <div></div>
                  <label>OO Deductions</label>
                  <div></div>
                  <label>Taxable Income</label>
                  <div></div>
                  <label>Federal Taxable Income</label>
                  <div></div>
                  <label>NetIncome Yearly</label>
                  <div></div>
                  <label>Average Net Monthly Income</label>
                  <div></div>
                </div>
              </div>
            </div>

            <input type={"submit"} value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
