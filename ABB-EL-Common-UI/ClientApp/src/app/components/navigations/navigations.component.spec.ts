import { NavigationsComponent } from './navigations.component'
import { Router } from '@angular/router'
import { AdalService } from 'adal-angular4'
import { NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MaterialModule } from '@app/material-module';
import {RouterTestingModule} from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NavigationsComponent', () => {
    let navigationComponent : NavigationsComponent;
    let adalService : AdalService;
    let router: Router;
    let ngZone : NgZone;

    beforeEach(() => {
        adalService = new AdalService(ngZone);
        navigationComponent = new NavigationsComponent(adalService,router);
        
    });

    describe('ngOnInit', () => {
        it('user should authenticate', () => {
            adalService.userInfo.authenticated = true;
            navigationComponent.ngOnInit();
            expect(navigationComponent.isAuthenticated).toEqual(true);
        })
    })


    describe('change', () => {
        it('should active asset page', () => {
            var btn = "assetsActive";
            navigationComponent.change(btn);
            expect(navigationComponent.dashboardActive).toEqual(false);
            expect(navigationComponent.assetsActive).toEqual(true);
        });


        it('should active dashboard page', () => {
            var btn = "dashboardActive";
            navigationComponent.change(btn);
            expect(navigationComponent.dashboardActive).toEqual(true);
            expect(navigationComponent.assetsActive).toEqual(false);
        })
    })
})

// describe('NavigationToOtherPage', () => {
//     let router;
//     beforeEach(() => {
//         router =  {
//             navigate: jasmine.createSpy('navigate')
//         }
//         TestBed.configureTestingModule({
//             declarations: [NavigationsComponent],
//             imports : [MaterialModule, RouterTestingModule, BrowserAnimationsModule],
//             providers: [AdalService,
//                 { provide: Router, useValue: router }  
//             ]
//         });
//     });
//     it('it should navigate to assets page', () => {
//         let component = TestBed.createComponent(NavigationsComponent).componentInstance;
//         let navigationPath = "/assetpage";
//         component.navigationTo(navigationPath);
//         expect(router.navigate).toHaveBeenCalledWith(['/assetpage']);
//     })
// })
