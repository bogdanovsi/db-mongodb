(function () { 
    const render = () => {
        let input = document.createElement('input');
        input.id = 'inp';
        input.type = 'text';

        const getData = (calback) => {
            fetch(`/book/${input.value}`, {
                headers: {
                  'Content-Type': 'application/json',
                }
            }).then(res => res.json()).then(data => {
                calback(data);
            })
        }

        let btn = document.createElement('button');
        btn.id = 'bt';
        btn.type = 'submit';
        btn.textContent = 'Find';

        btn.addEventListener('click', async (ev) => {
            getData(data => {
                found.textContent = JSON.stringify(data);
            });
        })

        let finder = document.createElement('div');
        finder.appendChild(input);
        finder.appendChild(btn);

        let found = document.createElement('div');

        let fragment = document.createDocumentFragment();
        fragment.appendChild(finder);
        fragment.appendChild(found);

        return fragment;
    }

    document.getElementById('root').appendChild(render());
})();