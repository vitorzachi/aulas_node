<!doctype html>
<html>
<head>
    <title>index template</title>
</head>
<body>
    <table>
        ${d.list.reduce((str, item) => str + '<tr><td>'+item.nome+'</td><td>' + item.sigla + '</td></tr>', '')}
    </table>
 
   
</body>
</html>