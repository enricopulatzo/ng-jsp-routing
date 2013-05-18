# Overview

An example of a single page [AngularJS](http://angularjs.org/) app served via JSP with 
randomly-accessible links

## The Problem

[AngularJS](http://angularjs.org/) makes it easy to create single page web apps, but I didn't know how to
serve up such a web app from a WAR file. This demonstrates a few principles
necessary to do so.

## The Solution

Under the Servlet Specification, one can treat a JSP file as a servlet, and then
map that servlet via a `<servlet-mapping>` section. This allows for arbitrary
URLs to be delegated to the [AngularJS](http://angularjs.org/) routing, provided that a few simple rules
are followed.

### Greedy Wildcards

It is tempting to simply route all requests to the JSP via use of
`<url-pattern>/*</url-pattern>` but this is the wrong approach. In order to
serve up other resources (e.g. [AngularJS](http://angularjs.org/) partials and REST endpoints) it's
advisable to use a more restrictive pattern such as the one used in this
project: `<url-pattern>/app/*</url-pattern>` this allows all of our [AngularJS](http://angularjs.org/)
routes to start with `<our context root>/app` while preserving use of other URIs
for other purposes.

### Context Root

Since WAR projects can be deployed to arbitrary context roots, it was necessary
to determine at runtime where the application was deployed. This was easily
accomplished via use of JSPs `${pageContext.request.contextPath}` value, which
is thrown into a global variable (the only one in the demo other than [AngularJS](http://angularjs.org/)).

The only caveat to this approach is that links inside [AngularJS](http://angularjs.org/) templates don't
know the context root, so I went with relative links. Perhaps a future revision
will demonstrate a smarter approach.
