---
title: php mysql 连接数据库

date: 2020-09-10
keys: 
	- '332f722ea1db7337e896262eef44da94'

---

## php mysql 连接数据库

访问数据库前,需要先连接到数据库服务器

实例(PDD)------其他方法请访问下面链接
```php

<?php
$servername = "localhost";
$username = "username";
$password = "password";

try {
    $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);
    echo "Connected successfully"; 
    }
catch(PDOException $e)
    {
    echo $e->getMessage();
    }
?>

```

注意在以上 PDO 实例中我们已经指定了数据库 (myDB)。PDO 在连接过程需要设置数据库名。如果没有指定，则会抛出异常。

## 关闭连接

连接在脚本执行完后会自动关闭。你也可以使用以下代码来关闭连接：

实例(PDO)

```php

	$conn = null;

```

### 参考文章

[参考文章1](http://www.manongjc.com/php/php_mysql_connect.html)