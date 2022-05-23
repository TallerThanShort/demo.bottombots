function generateRandomString() {
	let randomString = '';
	const randomNumber = Math.floor(Math.random() * 10);

	for (let i = 0; i < 20 + randomNumber; i++) {
		randomString += String.fromCharCode(33 + Math.floor(Math.random() * 94));
	}

	return randomString;
}

window.onload = () => {
    const [accessToken, tokenType, state] = [localStorage.getItem('access_token'), localStorage.getItem('token_type'), localStorage.getItem('state')];
    const usertime = localStorage.getItem('discriminator');
    const loggedAs = `${localStorage.getItem('username')}#${localStorage.getItem('discriminator')}`

    if(!accessToken){
        const randomString = generateRandomString();

        localStorage.setItem('oauth-state', randomString);
    }
    
    if(usertime != null){
        document.getElementById('navbarthings').innerHTML += `<span class="link-1naFFL link-2eyudH">${loggedAs}</span>`;
        console.log(`${localStorage.getItem('username')}#${localStorage.getItem('discriminator')}`)
    } else{
        document.getElementById('navbarthings').innerHTML += `<span class="link-1naFFL link-2eyudH" onclick="document.location.href = 'https://discord.com/api/oauth2/authorize?client_id=914396590901452820&redirect_uri=http%3A%2F%2Fdemo.bottombots.xyz%2Fauth&response_type=token&scope=identify%20email&state=${localStorage.getItem('oauth-state')}';">Log In</span>`
    }
};