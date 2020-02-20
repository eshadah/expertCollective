import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentureProjectsComponent } from './venture-projects.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { createVenturesTranslateLoader } from '../ventures.module';

xdescribe('VentureProjectsComponent', () => {
  let component: VentureProjectsComponent;
  let fixture: ComponentFixture<VentureProjectsComponent>;
  let translations: any = {"TEST": "This is a test"};

  class FakeLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
      return of(translations);
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forChild({
          loader: {provide: createVenturesTranslateLoader, useClass: FakeLoader}
        })
      ],
      declarations: [ VentureProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentureProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
