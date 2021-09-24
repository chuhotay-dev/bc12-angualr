// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

// Components
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { HeaderComponent } from './exercise1/header/header.component';
import { ContentComponent } from './exercise1/content/content.component';
import { SidebarComponent } from './exercise1/sidebar/sidebar.component';
import { FooterComponent } from './exercise1/footer/footer.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { HeaderEx2Component } from './exercise2/header-ex2/header-ex2.component';
import { FooterEx2Component } from './exercise2/footer-ex2/footer-ex2.component';
import { CarouselComponent } from './exercise2/carousel/carousel.component';
import { CollectionComponent } from './exercise2/collection/collection.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { StructuralComponent } from './directives/structural/structural.component';
import { AttributeComponent } from './directives/attribute/attribute.component';
import { HightlightDirective } from './my-directives/hightlight.directive';
import { HoverButtonDirective } from './my-directives/hover-button.directive';
import { InteractionComponent } from './interaction/interaction.component';
import { ChildComponent } from './interaction/child/child.component';
import { MaterialComponent } from './material/material.component';
import { DemoServiceComponent } from './demo-service/demo-service.component';
import { FirstComponent } from './demo-service/first/first.component';
import { SecondComponent } from './demo-service/second/second.component';
import { AccountManagementComponent } from './demo-service/account-management/account-management.component';
import { AccountListComponent } from './demo-service/account-management/account-list/account-list.component';
import { AddAccountComponent } from './demo-service/account-management/add-account/add-account.component';

// @NgModule: Decorator
// Các options trong decorator được gọi là metadata
@NgModule({
  declarations: [
    // Nơi khai báo tất cả component được quản lý bởi module này
    AppComponent,
    HelloComponent,
    Exercise1Component,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    FooterComponent,
    Exercise2Component,
    HeaderEx2Component,
    FooterEx2Component,
    CarouselComponent,
    CollectionComponent,
    DataBindingComponent,
    DirectivesComponent,
    StructuralComponent,
    AttributeComponent,
    HightlightDirective,
    HoverButtonDirective,
    InteractionComponent,
    ChildComponent,
    MaterialComponent,
    DemoServiceComponent,
    FirstComponent,
    SecondComponent,
    AccountManagementComponent,
    AccountListComponent,
    AddAccountComponent,
  ],
  imports: [
    // Nơi khai báo những module được sử dụng trong module này
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  // Nơi khai báo service
  providers: [],
  // Nơi khai báo component chạy đầu tiên trong module này
  bootstrap: [AppComponent],
})
export class AppModule {}
