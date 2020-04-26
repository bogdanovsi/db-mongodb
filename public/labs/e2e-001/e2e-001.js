(function () {    
    const render = () => {
        async function sha1(str) {
            const buf = await crypto.subtle.digest("SHA-1", new TextEncoder("utf-8").encode(str));
            return Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
        }

        let input = document.createElement('input');
        input.id = 'inp';
        input.type = 'text';

        let btn = document.createElement('button');
        btn.id = 'bt';
        btn.type = 'submit';
        btn.textContent = 'Test it';

        btn.addEventListener('click', (ev) => {
            sha1(input.value).then((result) => {input.value = result})
        })

        let fragment = document.createDocumentFragment();
        fragment.appendChild(input);
        fragment.appendChild(btn);

        return fragment;
    }

    document.getElementById('root').appendChild(render());
})();