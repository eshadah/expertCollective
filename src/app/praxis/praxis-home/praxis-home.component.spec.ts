import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraxisHomeComponent } from './praxis-home.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { createPraxisTranslateLoader } from '../praxis.module';

xdescribe('PraxisHomeComponent', () => {
  let component: PraxisHomeComponent;
  let fixture: ComponentFixture<PraxisHomeComponent>;
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
          loader: {provide: createPraxisTranslateLoader, useClass: FakeLoader}
        })
      ],
      declarations: [ PraxisHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraxisHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
