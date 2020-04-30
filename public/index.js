(function () {    
    const render = ({ route }) => {        
        let input = document.createElement('input');
        input.id = 'inp';
        input.type = 'text';

        let btn = document.createElement('button');
        btn.id = 'bt';
        btn.type = 'button';
        btn.textContent = 'Test it';

        let form = document.createElement('div');
        btn.onclick = (ev) => {
            ev.preventDefault();

            fetch(`${route}/${input.value}`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                }
            )
            .then(res => res.json())
            .then(res => {
                console.log(res);

                output.textContent = JSON.stringify(res)
            })
        }
        form.appendChild(input);
        form.appendChild(btn);
        
        let output = document.createElement('p');
        
        let title = document.createElement('p');
        title.textContent = route;

        let fragment = document.createDocumentFragment();
        fragment.appendChild(title);
        fragment.appendChild(form);
        fragment.appendChild(output);

        return fragment;
    }

    document.getElementById('root').appendChild(render({ route: 'book' }));
    document.getElementById('root').appendChild(render({ route: 'writers' }));
})();