const calculator = document.querySelector('#calculator');
        const result = document.querySelector('#result');

        calculator.addEventListener('submit', event => {
            event.preventDefault();

            const lambda = parseFloat(calculator.lambda.value);
            const x = parseFloat(calculator.x.value);
            const condition = calculator.condition.value;

            let probability;

            if (condition === '<') {
                probability = 1 - Math.exp(-lambda * x);
                result.textContent = `P(X < ${x}) = ${probability}`;
                
                return
             }

             if (condition === '<=') {
                 probability = Math.exp(-lambda * x);
                 result.textContent = `P(X <= ${x}) = ${probability}`;
                 
                 return
             }

             if (condition === '>') {
                 probability = Math.exp(-lambda * x);
                 result.textContent = `P(X > ${x}) = ${probability}`;
                 
                 return
             }

             if (condition === '>=') {
                 probability = Math.exp(-lambda * x);
                 result.textContent = `P(X >= ${x}) = ${probability}`;
                 
                 return
             }
         });