import { NgModule } from '@angular/core';
import { CpfPipe } from './cpf/cpf';
import { PlacaPipe } from './placa/placa';
import { TelefonePipe } from './telefone/telefone';
@NgModule({
	declarations: [CpfPipe,
    PlacaPipe,
    TelefonePipe],
	imports: [],
	exports: [CpfPipe,
    PlacaPipe,
    TelefonePipe]
})
export class PipesModule {}
