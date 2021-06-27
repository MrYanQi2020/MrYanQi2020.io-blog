---
title: 第2天
date: 2020-09-22

---

## **a** 标签 跳转其他页面 **锚点**

```html
	<a href="./try.html#p2">click</a>
```

## html <colgroup>

**HTML 中的 表格列组（Column Group <colgroup>） 标签用来定义表的分组。**

### col

定义将表所有列分为几组，一个col代表一组

**span：一组包含几列**

| 属性 | 值 |
| --- | --- |
| span | string |


```html{3-7}

<table>
	<caption>表标题</caption>
    <colgroup>
        <col>
        <col span="2" class="batman">
        <col span="2" class="flash">
    </colgroup>
</table>

```

