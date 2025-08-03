import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokeImg',
  standalone: true, // se estás a usar Angular standalone
})
export class PokeImgPipe implements PipeTransform {
  transform(url: string): string {
    const parts = url.split('/');
    const id = parts[parts.length - 2];
    return id
      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      : 'https://placehold.co/120x120/E0E0E0/333333?text=Image+Error';
  }
}
