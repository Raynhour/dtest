export default class FieldsValidator {

	constructor(formData) {
	    this.errors = {}
	    this.has_errors = {}

	    for (let field in formData) {
	        this.has_errors[field] = false;
	    }
    }


    /**
        reset очищает errors и has_errors
    */
    reset() {
	    this.errors = {}

        for (let field in this.has_errors) {
            this.has_errors[field] = false;
        }
    }

    /**
        IsValid если данные валидны - возвращает true, иначе false
    */
    validField(field) {
        delete this.errors[field]
        this.has_errors[field] = false;
    }

    invalidField(field, errMsg) {
        this.errors[field] = errMsg;
        this.has_errors[field] = true;
    }

	isFieldValid(field) {
	    if (this.has_errors[field] == true) {
	        return false;
	    } else {
    	    return true;
    	}
	}

    isValid() {
        var cnt = Object.keys(this.errors).length;
        return cnt > 0 ? false : true;
    }

    invalidFields(formDataErrors) {
        for (let field in formDataErrors) {
            this.invalidField(field, formDataErrors[field]);
        }
    }

    /**
        ValidateStrMinLen проверяет чтобы размер строки был не менее minLen символов
         * @param {string} - поле для проверки
         * @param {string} - проверяемое значение
         * @param {number} - минимальное значение при котором поле будет валидным
         * @param {string} - сообщение об ошибке
    */
    validateStrMinLen(field, val, minLen, errMsg) {
        if (!this.isFieldValid(field)) return;

	    if (val.length < minLen) {
	        this.invalidField(field, errMsg);
	    } else {
    	    this.validField(field);
    	}
	}

    /**
    ValidateStrMaxLen проверяет чтобы размер строки был не менее minLen символов
        * @param {string} - поле для проверки
        * @param {string} - проверяемое значение
        * @param {number} - максимальное значение при котором поле будет валидным
        * @param {string} - Сообщение об ошибке
    */
    validateStrMaxLen(field, val, maxLen, errMsg) {
        if (!this.isFieldValid(field)) return;

	    if (val.length > maxLen) {
	        this.invalidField(field, errMsg);
	    } else {
    	    this.validField(field);
    	}
	}

    /**
    ValidateStrLenRange проверяет чтобы размер строки был не менее minLen символов
        * @param {string} - поле для проверки
        * @param {string} - проверяемое значение
        * @param {number} - мимальное значение при котором поле будет валидным
        * @param {number} - максимальное значение при котором поле будет валидным
        * @param {string} - Сообщение об ошибке
    */
    validateStrLenRange(field, val, minLen, maxLen, errMsg) {
        if (!this.isFieldValid(field)) return;

	    if (val.length < minLen || val.length > maxLen) {
	        this.invalidField(field, errMsg);
	    } else {
    	    this.validField(field);
    	}
	}

    validateHandle(field, val, errMsg) {
        if (!this.isFieldValid(field)) return;

	    if (/[^A-Za-z0-9_\-\.]/.test(val)) {
	        this.invalidField(field, errMsg);
	    } else {
    	    this.validField(field);
    	}
	}

};
