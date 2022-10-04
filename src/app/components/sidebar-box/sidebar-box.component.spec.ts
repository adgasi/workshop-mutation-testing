import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarBoxComponent } from './sidebar-box.component';

describe('SidebarBoxComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [SidebarBoxComponent],
    }).compileComponents();
  });

  it('GIVEN sidebar settings were not saved THEN sidebar is expanded on initialize', () => {
    const fixture = TestBed.createComponent(SidebarBoxComponent);
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('.sidebar-box')).nativeElement.classList
    ).not.toContain('is-collapsed');
  });

  it('GIVEN sidebar settings were saved AND sidebar was collapsed THEN sidebar is collapsed on initialize', () => {
    localStorage.setItem('sidebarCollapsed', JSON.stringify(true));

    const fixture = TestBed.createComponent(SidebarBoxComponent);
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('.sidebar-box')).nativeElement.classList
    ).toContain('is-collapsed');
  });

  it('GIVEN sidebar is collapsed WHEN I click on the toggle button THEN it is expanded AND saved to the settings', () => {
    localStorage.setItem('sidebarCollapsed', JSON.stringify(true));

    const setItemSpy = jest.spyOn(localStorage, 'setItem');

    const fixture = TestBed.createComponent(SidebarBoxComponent);
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('.sidebar-box')).nativeElement.classList
    ).toContain('is-collapsed');

    const toggleButton = fixture.debugElement.query(By.css('.button-collapse'));
    toggleButton.triggerEventHandler('click');
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('.sidebar-box')).nativeElement.classList
    ).not.toContain('is-collapsed');

    expect(setItemSpy).toHaveBeenCalledWith('sidebarCollapsed', 'false');
  });
});
