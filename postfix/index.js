class Code {
    constructor(txtcode) {
        this.code = txtcode;
        this.stack = [];
        this.codepoint = 0;
        this.codetokens = this.code.split(' ');
        this.infixstack = [];
    }
    getCode() {
        return this.code;
    }
    isOperator(token){
        return token === '+' || token === '-' || token === '*' || token === '/' || token == '^';
    }
    onestep(){
        if (this.codepoint >= this.codetokens.length){
            console.log("Codepoint is bigger than code length");
            return;
        }
        let token = this.codetokens[this.codepoint];
        if(this.isOperator(token)){
            let right = this.stack.pop();
            let left = this.stack.pop();
            let infixright = this.infixstack.pop();
            let infixleft = this.infixstack.pop();
            if(token === '+'){
                this.stack.push(left + right);
                this.infixstack.push('(' + infixleft + ' + ' + infixright + ')');
            }else if(token === '-'){
                this.stack.push(left - right);
                this.infixstack.push('(' + infixleft + ' - ' + infixright + ')');
            }else if(token === '*'){
                this.stack.push(left * right);
                this.infixstack.push('(' + infixleft + ' * ' + infixright + ')');
            }else if(token === '/'){
                this.stack.push(left / right);
                this.infixstack.push('(' + infixleft + ' / ' + infixright + ')');
            }else if(token === '^'){
                this.stack.push(Math.pow(left, right));
                this.infixstack.push('(' + infixleft + ' ^ ' + infixright + ')');
            }
        }else{
            this.stack.push(parseFloat(token));
            this.infixstack.push(token);
        }
        this.codepoint++;    
    }
}

