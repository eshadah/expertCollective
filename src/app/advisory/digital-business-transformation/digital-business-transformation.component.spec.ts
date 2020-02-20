import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalBusinessTransformationComponent } from './digital-business-transformation.component';
import { TranslateModule, TranslateLoader, TranslateService, TranslateStore } from '@ngx-translate/core';
import { createAdvisoryTranslateLoader } from '../advisory.module';
import { Observable, of } from 'rxjs';

xdescribe('DigitalBusinessTransformationComponent', () => {
  let component: DigitalBusinessTransformationComponent;
  let fixture: ComponentFixture<DigitalBusinessTransformationComponent>;

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
          loader: {provide: createAdvisoryTranslateLoader, useClass: FakeLoader}
        })
      ],
      providers: [TranslateService, TranslateStore],
      declarations: [ DigitalBusinessTransformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalBusinessTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
