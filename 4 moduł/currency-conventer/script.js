{
    const calculateResult = (amount, currency) => {
        const EUR = 4.7182818284590452353
        const USD = 4.3325;
        const GBP = 5.2571;

        switch (currency) {

            case "EUR":
                return amount / EUR;

            case "USD":
                return amount / USD;

            case "GBP":
                return amount / GBP;

        }

    }
    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = result.toFixed(2) + " " + currency;

    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(amount, currency);

        updateResultText(amount, result, currency)

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit)
    };

    init();
};