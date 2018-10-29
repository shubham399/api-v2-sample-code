var agent = navigator.userAgent;
				var data = {"user_agent": agent};
				var url = "https://api.whatismybrowser.com/api/v2/user_agent_parse";
				fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json',
    'x-api-key':''//Get API-KEY here
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
