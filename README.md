This application is intended to assist you in transitioning beyond the Tour of Heroes.  It is not a complete application and it affords you the opportunity to practice adding additional features that are missing and in writing tests.  There is an obvious error in the code to encourage you to read through the code to find and fix it;  it is a very simple error easily fixed. 

To learn more about the new features added to Angular 6 use:
https://blog.angular.io/version-6-of-angular-now-available-cc56b0efa7a4



This application was scaffolded with:
  ng new ng6 --style=scss --routing
The optional flags buid routing and SASS into the app instead of using the default of CSS.
SASS preprocessing adds an additional step for
CSS but adds the abilit to use: variables, nesting, mixins.

After changing into your project directory starting the Angular embedded server with:
  ng serve -o
will automatically initiate the liveReload.

Next a simple sidebar component was added to assist with navigation:
ng g c sidebar  

(When you are ready visit:  https://material.angularjs.org/1.1.1/demo/panel
for more slick presentations.  Material comes with Angular and, as such, has an easier implementation than other comparable platforms.)

Additional components were added with the same cli pattern as: posts, users, details.

The next step was to create the sidebar in the app.component.html along with the <router-outlet></router-outlet>.  You likely already know this handles the display of the routed views.

Next the sidebar .html is set up.  In order to have the Material Icons available and fonts available the links are added in the main index.html for convenience.  You can entertain yourself with fonts at: 
https://design.google/library/google-fonts/

The next step was to add all the global styling to be used in the app via the /src/style.css 

Styling unique to a component can be added by using the .css or .scss file associated with that component as in:
/src/app/sidebar/sidebar.component.scss

Wiring up the previously created components with routing is a relatively painless process as the app-routing module was created at our start up.   Take note that the components to be routed are not automatically imported in the app-routing.module.ts file.  They are added manually.  Try adding a fourth just for practice.  Note that the :id added to the /details route will be used for retrieving specific details.

Retrieving information from an api is done in Angular via services.   So we create a service using:
  ng g s data

A point worth noting here is with Angular 6 "... the preferred way to create a singleton service is to specify on th eservice that it shold be provided in the application root."  Note that this acceps root or any module in the applcation; root will register it as a singleton.  If it's used for a ParticularModule then you would specify the ParticularModule instead of putting it in the provider of the module as has been the case in the past.

The HttpClient module is added to the data.service.ts file and it is also added to the src/app/app.module.ts file.

To use the data from the public api DataService and Observable have to be added to the src/app/users/users.component.ts file.  Then to make the results usable the Observable is added to the class.

Following this the src/app/user/users.component.html is set up to display the resulting data.

Adding two additional methods to src/app/data.service.ts expands the apps abilities to use data.   Take note that 
ActivatedRoute is called in the contructor so there's access to the userID and it is available for getUser().

The src/app/posts/posts.component.ts is treated the same way.

To introduce you to working with 508 compliance animations were added using:
  npm install @angular/animates@latest --save

And then adding them to the main module of src/app/app.module.ts

The animations were then added to the users.component.ts

Note the animations are part of the component decorator they are not part of the export class section of the code.

To learn more about the animation:

https://blog.angularindepth.com/total-guide-to-dynamic-angular-animations-that-can-be-toggled-at-runtime-be5bb6778a0a

and 

https://coryrylan.com/blog/angular-accessibility-tips-and-tricks





















