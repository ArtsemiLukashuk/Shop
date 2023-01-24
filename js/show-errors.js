function showErrors(errors) {
    for (let key in errors) {
        const span = document.querySelector(`input[name="${key}"] + span`);
        if (errors[key].length > 0) {
            const errorStr = errors[key].join('\n');
            span.innerHTML = errorStr;
        } else {
            span.innerHTML = '';
        }
    }
}

export default showErrors;