import { LoaderComponent } from './loader.component'
import { SimpleChanges, SimpleChange } from '@angular/core'

describe('LoaderComponent', () => {
    let loaderComponent: LoaderComponent;
    let simpleChange: SimpleChange;

    beforeEach(() => {
        loaderComponent = new LoaderComponent();
        simpleChange = new SimpleChange(1,2,true);
    });


    describe('ngOnChanges', () => {
        it('loader should be small', () => {
            loaderComponent.isSmLoader = true;
            loaderComponent.isMdLoader = false;
            loaderComponent.isLgLoader = false;

            loaderComponent.ngOnChanges({data: new SimpleChange(null, null,true)});

            expect(loaderComponent.small).toEqual(true);
            expect(loaderComponent.large).toEqual(false);
            expect(loaderComponent.medium).toEqual(false);
        })
    });

    describe('ngOnChanges1', () => {
        it('loader should be medium', () => {
            loaderComponent.isSmLoader = false;
            loaderComponent.isMdLoader = true;
            loaderComponent.isLgLoader = false;

            loaderComponent.ngOnChanges({data: new SimpleChange(null, null,true)});

            expect(loaderComponent.small).toEqual(false);
            expect(loaderComponent.large).toEqual(false);
            expect(loaderComponent.medium).toEqual(true);
        })
    })

    describe('ngOnChanges2', () => {
        it('loader should be large', () => {
            loaderComponent.isSmLoader = false;
            loaderComponent.isMdLoader = false;
            loaderComponent.isLgLoader = true;

            loaderComponent.ngOnChanges({data: new SimpleChange(null, null,true)});

            expect(loaderComponent.small).toEqual(false);
            expect(loaderComponent.large).toEqual(true);
            expect(loaderComponent.medium).toEqual(false);
        })
    })
})
