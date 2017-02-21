console.log("!----------Strategy----------!");

var validator = {
  types: {},
  messages: [],
  config: {},
  validate: function(data) {
    let i, msg, type, checker, result_ok;

    this.messages = [];
    for(i in data){
      if(data.hasOwnProperty(i)){
        type = this.config[i];
        checker = this.types[type];

        if(!type){
          continue;
        }
        if(!checker){
          throw {
            name: "ValidatorError",
            messages: "No handle to validate type " + type
          };
        }

        result_ok = checker.validate(data[i]);
        if(!result_ok){
          msg = "Invalid value *" + i + "*,  " + checker.instructions;
          this.messages.push(msg);
        }
      }
    }

    return this.hasErrors();
  },
  hasErrors: function() {
    return this.messages.length !== 0;
  }
};

var data = {
  first_name: "Super",
  last_name: "Man",
  age: "unknown",
  username: "0_O"
};

validator.config = {
  first_name: 'isNonEmpty',
  age: 'isNumber',
  username: 'isAlphaNum'
};



validator.types.isNonEmpty = {
  validate: function(value) {
    return value !== "";
  },
  instructions: "the value cannot be empty"
};

validator.types.isNumber = {
  validate: function(value) {
    return !isNaN(value);
  },
  instructions: "the value can only be valid number, e.g. 1, 3.14 or 2010"
};

validator.types.isAlphaNum ={
  validate: function(value) {
    return !/[^a-z0-9]/i.test(value);
  },
  instructions: "the value can only contain characters and numbers, no special symbols"
};

validator.validate(data);
if(validator.hasErrors()){
  console.log(validator.messages.join("\n"));
}