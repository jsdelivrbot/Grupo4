import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";

import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripsPage} from "../pages/trips/trips";
import {LocalWeatherPage} from "../pages/local-weather/local-weather";
import { profesorHomePage } from "../pages/_profesor/profesorHome/profesorHome";
import { profesorListarCursosPage } from "../pages/_profesor/profesorListarCursos/profesorListarCursos";
import { HttpProvider } from "../services/http";
import { ProfesorCrearJuegoPage } from "../pages/_profesor/profesor-crear-juego/profesor-crear-juego";
import { ProfesorVerAgregarNotaPage } from "../pages/_profesor/profesor-ver-agregar-nota/profesor-ver-agregar-nota";
import { ProfesorVerModificarNotaPage } from "../pages/_profesor/profesor-ver-modificar-nota/profesor-ver-modificar-nota";
import { ProfesorMensajePadresPage } from "../pages/_profesor/profesor-mensaje-padres/profesor-mensaje-padres";
import { ProfesorVerNotasPage } from "../pages/_profesor/profesor-ver-notas/profesor-ver-notas";
import { ProfesorPlanificacionPage } from "../pages/_profesor/profesor-planificacion/profesor-planificacion";
import { ProfesorVerNotasCursoPage } from "../pages/_profesor/profesor-ver-notas-curso/profesor-ver-notas-curso";
import { ProfesorVerActividadesCursoPage } from "../pages/_profesor/profesor-ver-actividades-curso/profesor-ver-actividades-curso";
import { ProfesorActividadPage } from "../pages/_profesor/profesor-actividad/profesor-actividad";
import { ProfesorCrearActividadPage } from "../pages/_profesor/profesor-crear-actividad/profesor-crear-actividad";
import { EstudianteVerHorarioPage } from "../pages/_estudiante/estudiante-ver-horario/estudiante-ver-horario";
import { EstudianteVerNotasPage } from "../pages/_estudiante/estudiante-ver-notas/estudiante-ver-notas";
import { EstudianteVerNotasOrdenPage } from "../pages/_estudiante/estudiante-ver-notas-orden/estudiante-ver-notas-orden";
import { PadresListadoHijosPage } from "../pages/_padre/padres-listado-hijos/padres-listado-hijos";
import { PadreVerMensajesPage } from "../pages/_padre/padre-ver-mensajes/padre-ver-mensajes";
import { PadresVerNotasHijosPage } from "../pages/_padre/padres-ver-notas-hijos/padres-ver-notas-hijos";
import { PadreVerHorarioHijoPage } from "../pages/_padre/padre-ver-horario-hijo/padre-ver-horario-hijo";
import { AdminVerMaestrosPage } from "../pages/_admin/admin-ver-maestros/admin-ver-maestros";
import { AdminAsignarMaestroPage } from "../pages/_admin/admin-asignar-maestro/admin-asignar-maestro";

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    profesorHomePage,
    profesorListarCursosPage,
    ProfesorCrearJuegoPage,
    ProfesorVerAgregarNotaPage,
    ProfesorVerModificarNotaPage,
    ProfesorMensajePadresPage,
    ProfesorVerNotasPage,
    ProfesorPlanificacionPage,
    ProfesorVerNotasCursoPage,
    ProfesorVerActividadesCursoPage,
    ProfesorActividadPage,
    ProfesorCrearActividadPage,
    EstudianteVerHorarioPage,
    EstudianteVerNotasPage,
    EstudianteVerNotasOrdenPage,
    PadresListadoHijosPage,
    PadreVerMensajesPage,
    PadresVerNotasHijosPage,    
    PadreVerHorarioHijoPage,
    AdminVerMaestrosPage,
    AdminAsignarMaestroPage
    
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    profesorHomePage,
    profesorListarCursosPage,
    ProfesorCrearJuegoPage,
    ProfesorVerAgregarNotaPage,
    ProfesorVerModificarNotaPage,
    ProfesorMensajePadresPage,
    ProfesorVerNotasPage,
    ProfesorPlanificacionPage,
    ProfesorVerNotasCursoPage,
    ProfesorVerActividadesCursoPage,
    ProfesorActividadPage,
    ProfesorCrearActividadPage,
    EstudianteVerHorarioPage,
    EstudianteVerNotasPage,
    EstudianteVerNotasOrdenPage,
    PadresListadoHijosPage,
    PadreVerMensajesPage,
    PadresVerNotasHijosPage,    
    PadreVerHorarioHijoPage,
    AdminVerMaestrosPage,
    AdminAsignarMaestroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider,
    HttpProvider
  ]
})

export class AppModule {
}
