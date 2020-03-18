import { HeaderComponent } from './header.component';
import { AdalService } from 'adal-angular4';
import{ MatDialog }from '@angular/material';
import { ChangeDetectorRef, NgZone } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import * as fromStore from '@app/global-store';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { state } from '@angular/animations';

export class MatDialogStub {
    result: boolean = true;

    setResult(val: boolean) {
        this.result = val;
    }
    open()
    {
        return { afterClosed: () => of(this.result)}
    }
}


describe('HeaderComponent', () => {
    let headerComponent : HeaderComponent;
    let mockadalService : AdalService;
    let mockmatDialog : MatDialog;
    let store: Store<fromStore.ContainerState>;
    let changeDetector : ChangeDetectorRef;
    let ngZone: NgZone;

    beforeEach(() => {
        mockadalService = new AdalService(ngZone);
        headerComponent = new HeaderComponent(mockadalService,mockmatDialog, changeDetector, store)
    });

    describe('ngOnInit', () => {

        it('should not login - user unauthorized', () => {
            mockadalService.userInfo.authenticated = false;
            headerComponent.ngOnInit();
            expect(headerComponent.isAuthenticated).toEqual(false);
        });
    });
});

describe('HeaderComponentSpy', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let formStore: Store<fromStore.ContainerState>;
    const dialogStub  = new MatDialogStub();

    beforeEach(() => {
        const storeStub = () => ({
            select: (function0) => ({ subscribe: () => ({}) })
        });

        const adalServiceStub = () => ({
            userInfo: (aaa) => ({authenticated : true}),
            login: (functionlogin) => ({}),
            logOut: (functionlogout) => ({})
        });

        const matdialogStub = () => ({
            open : (aaa) => ({})
        });

        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({}),
                HttpClientTestingModule
            ],
            declarations: [HeaderComponent],
            providers : [
                { provide: Store, useFactory: storeStub },
                { provide: AdalService, useFactory: adalServiceStub },
                { provide: MatDialog, useValue: dialogStub }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;

    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('getPalntsList', () => {
        it('makes expected calls', () => {
            const storeStub = TestBed.get(Store);
            spyOn(storeStub, 'select').and.callThrough();
            component.getPalntsList();
            expect(storeStub.select).toHaveBeenCalled();
        });

        describe('ngOnInitCall', () => {
            it('makes expected calls', () => {
                const adalServiceStub = TestBed.get(AdalService);
                adalServiceStub.userInfo.authenticated = true;
                adalServiceStub.userInfo.profile = { name : "test user"};
                component.ngOnInit();
                expect(component.isAuthenticated).toEqual(true);
            });
        });

        describe('openDialog', () => {
            it('makes expected calls', () => {
                const dialogStub = TestBed.get(MatDialog);
                spyOn(dialogStub, 'open').and.callThrough();
                dialogStub.setResult(true);
                component.openDialog();
                expect(dialogStub.open).toHaveBeenCalled();
            });
        });

        it('expected call with subscription push', () => {
            const storeStub = TestBed.get(Store);
            spyOn(component.subscription, 'push').and.callThrough();          
            component.getPalntsList();
            expect(component.subscription.push).toHaveBeenCalled();
        });

        it('expected values', () => {
            let dummydata = {
                PlantsData : {
                    data: {
                        Value : [
                            {
                                PlantType: "EDCS",
                                Name: "SACE",
                                Location: {
                                    CountryCode: "IT",
                                }
                            }
                        ]
                    }
                }
            };
            const storeStub = TestBed.get(Store);
            spyOn(storeStub, 'select').and.callFake(selector => { return of(dummydata)});
            spyOn(component.subscription, 'push').and.returnValue(1);
            component.getPalntsList();
            expect(component.plantsList).toEqual( { PlantType: "EDCS", Name : "SACE", Location: { CountryCode: "IT",}});
        });
    })

    describe('loginAD', () => {
        it('makes login expected calls', () => {
            const adalServiceStub = TestBed.get(AdalService);
            spyOn(adalServiceStub, 'login').and.callThrough();
            component.loginAD();
            expect(adalServiceStub.login).toHaveBeenCalled();
        });
    });

    describe('logoutAD', () => {
        it('makes logout expected calls', () => {
            const adalServiceStub = TestBed.get(AdalService);
            component.isAuthenticated = true;
            spyOn(adalServiceStub, 'logOut').and.callThrough();
            component.logoutAD();
            expect(adalServiceStub.logOut).toHaveBeenCalled();
        });
    });

})