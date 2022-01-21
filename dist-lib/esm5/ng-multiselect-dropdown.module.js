import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiSelectComponent } from './multiselect.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { ListFilterPipe } from './list-filter.pipe';
var NgMultiSelectDropDownModule = /** @class */ (function () {
    function NgMultiSelectDropDownModule() {
    }
    NgMultiSelectDropDownModule_1 = NgMultiSelectDropDownModule;
    NgMultiSelectDropDownModule.forRoot = function () {
        return {
            ngModule: NgMultiSelectDropDownModule_1
        };
    };
    var NgMultiSelectDropDownModule_1;
    NgMultiSelectDropDownModule = NgMultiSelectDropDownModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule, FormsModule],
            declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
            providers: [ListFilterPipe],
            exports: [MultiSelectComponent]
        })
    ], NgMultiSelectDropDownModule);
    return NgMultiSelectDropDownModule;
}());
export { NgMultiSelectDropDownModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbXVsdGlzZWxlY3QtZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbXVsdGlzZWxlY3QtZHJvcGRvd24vIiwic291cmNlcyI6WyJuZy1tdWx0aXNlbGVjdC1kcm9wZG93bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBU3BEO0lBQUE7SUFNQSxDQUFDO29DQU5ZLDJCQUEyQjtJQUM3QixtQ0FBTyxHQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSw2QkFBMkI7U0FDdEMsQ0FBQztJQUNKLENBQUM7O0lBTFEsMkJBQTJCO1FBUHZDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7WUFDcEMsWUFBWSxFQUFFLENBQUMsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxDQUFDO1lBQzNFLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUMzQixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNoQyxDQUFDO09BRVcsMkJBQTJCLENBTXZDO0lBQUQsa0NBQUM7Q0FBQSxBQU5ELElBTUM7U0FOWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTXVsdGlTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL211bHRpc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENsaWNrT3V0c2lkZURpcmVjdGl2ZSB9IGZyb20gJy4vY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBMaXN0RmlsdGVyUGlwZSB9IGZyb20gJy4vbGlzdC1maWx0ZXIucGlwZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtNdWx0aVNlbGVjdENvbXBvbmVudCwgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlLCBMaXN0RmlsdGVyUGlwZV0sXHJcbiAgcHJvdmlkZXJzOiBbTGlzdEZpbHRlclBpcGVdLFxyXG4gIGV4cG9ydHM6IFtNdWx0aVNlbGVjdENvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOZ011bHRpU2VsZWN0RHJvcERvd25Nb2R1bGUge1xyXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ011bHRpU2VsZWN0RHJvcERvd25Nb2R1bGU+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBuZ01vZHVsZTogTmdNdWx0aVNlbGVjdERyb3BEb3duTW9kdWxlXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl19