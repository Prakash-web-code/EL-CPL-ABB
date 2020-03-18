import { PlantListDialogComponent } from './plant-list-dialog.component';
import { Store, StoreModule } from '@ngrx/store';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material';
import * as fromStore from '@app/global-store';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { isNgTemplate } from '@angular/compiler';
import { MaterialModule } from '@app/material-module';
import { PlantService } from '@app/services/plant.service';

var json = {
    "ELEMENT_DATA": [
      {
        "plantType": "sites",
        "plants": "ABB Space Building",
        "user": "Admin",
        "favourites": 0,
        "id": 1,
        "subname": "ABB S.p.A Via Pescaria 5 24123 Bergamo (BG) IT\"",
        "icon": "assets/ABB UI Icon Package/SVG/home-plant.svg",
        "isIcon": true
      },
      {
        "plantType": "groups",
        "plants": "Space HQ",
        "user": "Admin",
        "favourites": 0,
        "subname": "ABB S.p.A Via Pescaria 5 24123 Bergamo (BG) IT\"",
        "icon": "assets/ABB UI Icon Package/SVG/home-plant.svg",
        "isIcon": true
      },
      {
        "plantType": "groups",
        "plants": "ABB Sites",
        "user": "Admin",
        "favourites": 0,
        "icon": "assets/ABB UI Icon Package/SVG/home-plant.svg",
        "isIcon": false
      },
      {
        "plantType": "sites",
        "plants": "ENEL Sites",
        "id": 2,
        "user": "Admin",
        "favourites": 0,
        "icon": "assets/ABB UI Icon Package/SVG/home-plant.svg",
        "checked": "checked",
        "isIcon": false
      },
      {
        "plantType": "sites",
        "plants": "ABB Plants",
        "id": 3,
        "user": "Admin",
        "favourites": 0,
        "subname": "ABB S.p.A Via Pescaria 5 24123 Bergamo (BG) IT\"",
        "icon": "assets/ABB UI Icon Package/SVG/home-plant.svg",
        "checked": "nchecked",
        "isIcon": true
      },
      {
        "plantType": "sites",
        "plants": "plant building",
        "id": 4,
        "user": "Admin",
        "favourites": 0,
        "subname": "ABB S.p.A Via Pescaria 5 24123 Bergamo (BG) IT\"",
        "icon": "assets/ABB UI Icon Package/SVG/home-plant.svg",
        "checked": "nchecked",
        "isIcon": true
      },
      {
        "plantType": "overview",
        "plants": "ABB Space Building",
        "user": "Admin",
        "favourites": 0,
        "subname": "ABB S.p.A Via Pescaria 5 24123 Bergamo (BG) IT\"",
        "icon": "assets/ABB UI Icon Package/SVG/home-plant.svg",
        "checked": "checked",
        "isIcon": false
      },
      {
        "plantType": "favourites",
        "plants": "plant building",
        "user": "Admin",
        "favourites": 0,
        "subname": "ABB S.p.A Via Pescaria 5 24123 Bergamo (BG) IT\"",
        "icon": "assets/ABB UI Icon Package/SVG/home-plant.svg",
        "checked": "checked",
        "isIcon": true
      }
    ]
  };

  const ELEMENT_DATA = json.ELEMENT_DATA;

describe('PlantListDialogComponent', () => {
    let plantlistdialogComponent : PlantListDialogComponent;
    let mockmatDialog : MatDialog;
    let plantServicce: PlantService,
    mockHttp;
    let store: Store<fromStore.ContainerState>;
    let dialogRef : MatDialogRef<PlantListDialogComponent>;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp',['post', 'get'])
        plantServicce = new PlantService(mockHttp);
        plantlistdialogComponent = new PlantListDialogComponent(dialogRef,plantServicce, store);
    });

    describe('getType', () => {
        it('should return proper plant list', () => {
            plantlistdialogComponent.getType("All");
            expect(plantlistdialogComponent.datasource.data).toEqual(ELEMENT_DATA);
        });

        it('should return site list', () => {
            plantlistdialogComponent.getType("sites");
            expect(plantlistdialogComponent.datasource.data.length).toEqual(4);
        });

        it('should return group plant list', () => {
            plantlistdialogComponent.getType("groups");
            expect(plantlistdialogComponent.datasource.data.length).toEqual(2);
        });

        it('should return favorites plant list', () => {
            plantlistdialogComponent.getType("test");
            expect(plantlistdialogComponent.datasource.data.length).toEqual(5);
        });
    });

    describe('filterPlantDetails', () => {
        it('should filter Plant Details', () => {
            plantlistdialogComponent.filterPlantDetails("All");
            expect(plantlistdialogComponent.datasource.data).toEqual(ELEMENT_DATA);
        });
    });

    describe('search', () => {
        it('should search properly', () => {
            plantlistdialogComponent.search("All");
            expect(plantlistdialogComponent.datasource.filter).toEqual("All");
        });
    });
});

describe('PlantListDialogComponentSpy', () => {
    let component: PlantListDialogComponent;
    let fixture: ComponentFixture<PlantListDialogComponent>;
    let formStore: Store<fromStore.ContainerState>;

    beforeEach(() => {
        const storeStub = () => ({
            select: (function0) => ({ subscribe: () => ({}) })
        });

        const matdialogStub = () => ({
            open : (aaa) => ({})
        });

        const matdialogrefStub = () => ({
            close : (aaa) => ({})
        });

        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({}),
                HttpClientTestingModule,
                MaterialModule,
            ],
            declarations: [PlantListDialogComponent],
            providers : [
                { provide: Store, useFactory: storeStub },
                { provide: MatDialog, useFactory: matdialogStub },
                { provide: MatDialogRef, useFactory: matdialogrefStub}
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(PlantListDialogComponent);
        component = fixture.componentInstance;

    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('getPlantDetails', () => {
        it('makes expected calls', () => {
            const storeStub = TestBed.get(Store);
            spyOn(storeStub, 'select').and.callThrough();
            localStorage.setItem("currentUser", '{ "profile": { "name": "test user"} }');
            component.getPlantDetails();
            expect(storeStub.select).toHaveBeenCalled();
        });
    });
})
