<%@ page contentType="text/html;charset=UTF-8" language="java" %><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %><!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Angular Demo</title>
	<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet">
	<script src='<c:url value="/resources/css/app.css"/>'></script>
</head>
<body ng-app="routingDemo" id='ng-app'>
<div class='container' ng-view>
	<div class='row'>
		<div class='span12'>
			<div class="progress progress-striped active">
				<div class="bar" style="width: 100%;">Please wait while our application loads &#8230;</div>
			</div>
		</div>
	</div>
</div>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.6/angular.min.js"></script>
<script> var CONTEXT_ROOT = '${pageContext.request.contextPath}'; </script>
<script src='<c:url value="/resources/js/app.js"/>'></script>
<script src='<c:url value="/resources/js/app.controllers.js"/>'></script>
</body>
</html>