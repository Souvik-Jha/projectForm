import { React, useState } from 'react'



const BasicForm = () => {
    const [enteredName, setEnteredName] = useState("")
    const [enteredNameTouched, setEnteredNameTouched] = useState(false)

    const [enteredPassword, setEnteredPassword] = useState("")
    const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false)

    const [enteredSupplierCode, setEnteredSupplierCode] = useState("")
    const [enteredSupplierCodeTouched, setEnteredSupplierCodeTouched] = useState(false)

    const [enteredInvoiceType, setEnteredInvoiceType] = useState("")
    const [enteredInvoiceTypeTouched, setEnteredInvoiceTypeTouched] = useState(false)

    const [enteredAirlineCode, setEnteredAirlineCode] = useState("")
    const [enteredAirlineCodeTouched, setEnteredAirlineCodeTouched] = useState(false)

    const [enteredAgentAccNumber, setEnteredAgentAccNumber] = useState("")
    const [enteredAgentAccNumberTouched, setEnteredAgentAccNumberTouched] = useState(false)

    const [enteredProductClass, SetEnteredProductClass] = useState("")
    const [enteredProductClassTouched, SetEnteredProductClassTouched] = useState(false)

    const [enteredFareType, setEnteredFareType] = useState("")
    const [enteredFareTypeTouched, setEnteredFareTypeTouched] = useState(false)

    // const [enteredsupplierCodeApplicable, setEnteredSupplierCodeApplicable] = useState(true)
    // const [enteredsupplierCodeApplicableTouched, setEnteredSupplierCodeApplicableTouched] = useState(false)



    const enteredNameIsvalid = enteredName.trim() !== ""
    const nameInputInvalid = enteredNameTouched && !enteredNameIsvalid

    const enteredPasswordIsValid = enteredPassword.trim() !== ""
    const passwordInputInvalid = enteredPasswordTouched && !enteredPasswordIsValid

    const enteredSupplierCodeIsValid = enteredSupplierCode.trim() !== ""
    const supplierCodeInputInvalid = !enteredSupplierCodeIsValid && enteredSupplierCodeTouched

    const enteredInvoiceTypeIsvalid = enteredInvoiceType.trim() !== ""
    const invoiceTypeInputInvalid = !enteredInvoiceTypeIsvalid && enteredInvoiceTypeTouched

    const enteredAirlineCodeIsValid = enteredAirlineCode.trim() !== ""
    const airlineCodeInputInvalid = !enteredAirlineCodeIsValid && enteredAirlineCodeTouched

    const enteredAgentAccNumberIsValid = enteredAgentAccNumber.trim() !== ""
    const agentAccNumberInputInvalid = !enteredAgentAccNumber && enteredAgentAccNumberTouched

    const enteredProductClassIsValid = enteredProductClass.trim() !== ""
    const productClassInputInvalid = !enteredProductClass && enteredProductClassTouched

    const enteredFareTypeIsvalid = enteredFareType.trim() !== ""
    const fareTypeInvalid = !enteredFareType && enteredFareTypeTouched

    // const enteredSUpplierCodeApplicableIsValid = enteredsupplierCodeApplicable.trim() !== true
    // const supplierCodeApplicableInvalid = !enteredsupplierCodeApplicable && enteredsupplierCodeApplicableTouched


    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };
    const nameInputBlurHandler = event => {
        setEnteredNameTouched(true);
    };

    const passwordInputChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };
    const passwordInputBlurHandler = event => {
        setEnteredPasswordTouched(true);
    };

    const supplierCodeInputChangeHandler = (event) => {
        setEnteredSupplierCode(event.target.value)
    }
    const supplierCodeInputBlurHandler = (event) => {
        setEnteredSupplierCodeTouched(true)
    }

    const invoiceTypeInputChangeHandler = (event) => {
        setEnteredInvoiceType(event.target.value)
    }
    const invoiceTypeInputBlurHandler = (event) => {
        setEnteredInvoiceTypeTouched(true)
    }

    const airlineCodeInputChangeHandler = (event) => {
        setEnteredAirlineCode(event.target.value)
    }
    const airlineCodeInputBlurHandler = (event) => {
        setEnteredAirlineCodeTouched(true)
    }

    const agentAccNumberInputChangeHandler = (event) => {
        setEnteredAgentAccNumber(event.target.value)
    }
    const agentAccNumberInputBlurHandler = (event) => {
        setEnteredAgentAccNumberTouched(true)
    }

    const productClassInputChangeHandler = (event) => {
        SetEnteredProductClass(event.target.value)
    }
    const productClassInputBlurHandler = (event) => {
        SetEnteredProductClassTouched(true)
    }

    const fareTypeInputChangeHandler = (event) => {
        setEnteredFareType(event.target.value)
    }
    const fareTypeInputBlurHandler = (event) => {
        setEnteredFareTypeTouched(true)
    }

    // const supplierCodeApplicableInputChangeHandler = (event) => {
    //     setEnteredSupplierCodeApplicable(event.target.value)
    // }
    // const supplierCodeApplicableInputBlurHandler = (event) => {
    //     setEnteredSupplierCodeApplicableTouched(true)
    // }





    const formSubmitHandler = (event) => {
        event.preventDefault()

        setEnteredNameTouched(true);
        if (!enteredNameIsvalid) {
            return;
        }
        setEnteredPasswordTouched(true);
        if (!enteredPasswordIsValid) {
            return;
        }
        setEnteredSupplierCodeTouched(true)
        if (!enteredSupplierCodeIsValid) {
            return;
        }
        setEnteredInvoiceTypeTouched(true)
        if (!enteredInvoiceTypeIsvalid) {
            return;
        }
        setEnteredAirlineCodeTouched(true)
        if (!enteredAirlineCodeIsValid) {
            return;
        }
        setEnteredAgentAccNumberTouched(true)
        if (!enteredAgentAccNumberIsValid) {
            return;
        }
        SetEnteredProductClassTouched(true)
        if (!enteredProductClassIsValid) {
            return;
        }
        setEnteredFareTypeTouched(true)
        if (!enteredFareTypeIsvalid) {
            return;
        }
        // setEnteredSupplierCodeApplicableTouched(true)
        // if (!enteredSUpplierCodeApplicableIsValid) {
        //     return;
        // }


        setEnteredName("")
        setEnteredNameTouched(false);
        setEnteredPassword("");
        setEnteredPasswordTouched(false);
        setEnteredSupplierCode("")
        setEnteredSupplierCodeTouched(false)
        setEnteredInvoiceType("")
        setEnteredInvoiceTypeTouched(false)
        setEnteredAirlineCode("")
        setEnteredAirlineCodeTouched(false)
        setEnteredAgentAccNumber("")
        setEnteredAgentAccNumberTouched(false)
        SetEnteredProductClass("")
        SetEnteredProductClassTouched(false)
        setEnteredFareType("")
        setEnteredFareTypeTouched(false)
        // setEnteredSupplierCodeApplicable(true)
        // setEnteredSupplierCodeApplicableTouched(false)

    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div>
                <div>
                    <label htmlFor="name"  >AGENT NAME</label>
                    <input type="text" onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName} />
                </div>
                {nameInputInvalid && (<p>Name is required</p>)}
                <div>
                    <label htmlFor="password"  >AGENT PASSWORD</label>
                    <input type="text" onChange={passwordInputChangeHandler} onBlur={passwordInputBlurHandler} value={enteredPassword} />
                </div>
                {passwordInputInvalid && (<p>password is required</p>)}
                {/* <div>
                    <label htmlFor="supplierCodeApplicable" >IS SUPPLIER CODE APPLICABLE</label>
                    <input type="text" onChange={supplierCodeApplicableInputChangeHandler} onBlur={supplierCodeApplicableInputBlurHandler} value={enteredsupplierCodeApplicable} />
                </div>
                {supplierCodeApplicableInvalid && (<p>Supplier Code Applicable is required</p>)} */}
                <div>
                    <label htmlFor="supplierCode" >SUPPLIER CODE</label>
                    <input type="text" onChange={supplierCodeInputChangeHandler} onBlur={supplierCodeInputBlurHandler} value={enteredSupplierCode} />
                </div>
                {supplierCodeInputInvalid && (<p>Supplier Code is required</p>)}
                <div>
                    <label htmlFor="invoiceType" >INVOICE TYPE</label>
                    <input type="text" onChange={invoiceTypeInputChangeHandler} onBlur={invoiceTypeInputBlurHandler} value={enteredInvoiceType} />
                </div>
                {invoiceTypeInputInvalid && (<p>InvoiceType is required</p>)}
                <div>
                    <label htmlFor="airlineCode" >AIRLINE CODE</label>
                    <input type="text" onChange={airlineCodeInputChangeHandler} onBlur={airlineCodeInputBlurHandler} value={enteredAirlineCode} />
                </div>
                {airlineCodeInputInvalid && (<p>Airline Code is required</p>)}
                <div>
                    <label htmlFor="agentAccNumber" >AGENT ACCOUNT NUMBER</label>
                    <input type="text" onChange={agentAccNumberInputChangeHandler} onBlur={agentAccNumberInputBlurHandler} value={enteredAgentAccNumber} />
                </div>
                {agentAccNumberInputInvalid && (<p>Agent Acc Number is required</p>)}
                <div>
                    <label htmlFor="productType" >PRODUCT CLASSES</label>
                    <input type="text" onChange={productClassInputChangeHandler} onBlur={productClassInputBlurHandler} value={enteredProductClass} />
                </div>
                {productClassInputInvalid && (<p>Product classes is required</p>)}
                <div>
                    <label htmlFor="fareTypes" >FARE TYPES</label>
                    <input type="text" onChange={fareTypeInputChangeHandler} onBlur={fareTypeInputBlurHandler} value={enteredFareType} />
                </div>
                {fareTypeInvalid && (<p>Fare type is required</p>)}
                {/* <div>
                    <label htmlFor="email" >Environment</label>
                    <input type="text" onChange={EnvironmentInputChangeHandler} value={enteredEmail} />
                </div>
                {!enteredEnvironmentIsvalid && <p>Email is erequired</p>} */}
                <div>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}

export default BasicForm