(function () {    
    const render = () => {    
        let input = document.createElement('input');
        input.id = 'inp';
        input.type = 'text';

        let btn = document.createElement('button');
        btn.id = 'bt';
        btn.type = 'submit';
        btn.textContent = 'Test it';

        let form = document.createElement('form');
        form.onsubmit = (ev) => {
            ev.preventDefault();

            fetch(`book/${input.value}`)
            .then(res => output.textContent = JSON.stringify(res))
            .catch(err => console.error(err));
        }
        form.appendChild(input);
        form.appendChild(btn);
        
        let output = document.createElement('p');
        
        let fragment = document.createDocumentFragment();
        fragment.appendChild(form);
        fragment.appendChild(output);

        return fragment;
    }

    document.getElementById('root').appendChild(render());
})();