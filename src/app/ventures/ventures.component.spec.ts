import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenturesComponent } from './ventures.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { createVenturesTranslateLoader } from './ventures.module';

xdescribe('VenturesComponent', () => {
  let component: VenturesComponent;
  let fixture: ComponentFixture<VenturesComponent>;
  let translations: any = {"TEST": "This is a test"};

  class FakeLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
      return of(translations);
    }
  }
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forChild({
          loader: {provide: createVenturesTranslateLoader, useClass: FakeLoader}
        })
      ],
      providers: [TranslateService, TranslateStore],
      declarations: [ VenturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
