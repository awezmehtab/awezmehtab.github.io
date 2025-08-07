fetch("https://cataas.com/cat?json=true")
  .then(res => res.json())
  .then(data => {
    document.getElementById("cat").src = data.url;
    document.getElementById("wait").remove();
  });

