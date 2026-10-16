import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({selector:'app-root',standalone:true,imports:[CommonModule],templateUrl:'./app.component.html'})
export class AppComponent {
  language = signal<'en'|'pt'>('en');
  toggleLanguage() { this.language.update(v => v === 'en' ? 'pt' : 'en'); }
  readonly projects = [
    {num:'01',name:'Atlas Flight Booking Service',kind:'FEATURED / JAVA + AI',desc:'AI-assisted flight booking with human-approved operations, modular architecture, and transactional safeguards.',descPt:'Reservas de voos assistidas por IA, com aprovação humana, arquitetura modular e consistência transacional.',stack:['Java 21','Spring Boot','Spring Modulith','Spring AI','Angular','PostgreSQL'],repo:'https://github.com/Phsouzaro/atlas-flight-booking-service',demo:'https://phsouzaro.github.io/atlas-flight-booking-service/'},
    {num:'02',name:'Overload',kind:'PRODUCT ENGINEERING',desc:'Workout tracking app with sessions, personal records, progress analytics, and offline-first local data.',descPt:'Aplicativo de treinos com sessões, recordes pessoais, análises de progresso e dados locais.',stack:['Flutter','Dart','Riverpod','SQLite'],repo:'https://github.com/Phsouzaro/overload_app',demo:''},
    {num:'03',name:'Architecture Notes',kind:'SYSTEM DESIGN / LEARNING',desc:'Public engineering notes on architecture decisions, software design, and enterprise solution thinking.',descPt:'Anotações públicas sobre decisões arquiteturais, design de software e soluções enterprise.',stack:['System Design','Architecture','ADRs'],repo:'https://github.com/Phsouzaro/mba-arquitetura-fullcycle',demo:''}
  ];
}
