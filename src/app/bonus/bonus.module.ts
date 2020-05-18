import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { BonusRoutingModule } from './bonus-routing.module';
import { BonusComponent } from './bonus.component';

@NgModule({
  declarations: [BonusComponent],
  imports: [BonusRoutingModule, MatListModule],
})
export class BonusModule {}
