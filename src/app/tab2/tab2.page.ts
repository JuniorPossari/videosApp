import { IGeneroAPI } from './../models/IGeneroAPI.model';
import { GeneroService } from './../services/genero.service';
import { IListaFilmes, IFilmeAPI } from './../models/IFilmeAPI.model';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  titulo = 'Filmes';

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h 50m',
      nota: 3.5,
      logo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
    },
    {
      nome: 'Cruella (2021)',
      lancamento: '28/05/2021',
      duracao: '2h 14m',
      nota: 4.2,
      logo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ljPHd7WiPVKmuXi1hgQUpZQslbC.jpg',
      generos: ['Comédia', 'Crime'],
      pagina: '/cruella',
    },
  ];

  listaFilmesAPI: IListaFilmes;

  generos: string[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public route: Router
  ) {}

  buscarFilmes(evento: any){
    console.log(evento.target.value);
    const busca = evento.target.value;
    if(busca && busca.trim() !== ''){
      this.filmeService.buscarFilmes(busca).subscribe(dados=>{
        console.log(dados);
        this.listaFilmesAPI = dados;
      });
    }
  }

  exibirFilme(filme: IFilmeAPI) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertaNota(nota) {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Realmente deseja dar nota ' + nota + ' a esse filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
        },
        {
          text: 'Sim',
          handler: () => {
            this.apresentarToast(nota);
          },
        },
      ],
    });

    await alert.present();
  }

  async apresentarToast(nota) {
    const toast = await this.toastController.create({
      message: 'Você deu nota ' + nota + ' para esse filme!',
      duration: 2000,
      position: 'top',
      color: 'success',
    });
    toast.present();
  }

  ngOnInit(){
    this.generoService.buscarGeneros().subscribe(dados=>{
      console.log('Generos: ', dados.genres);
      dados.genres.forEach(genero => {
        this.generos[genero.id] = genero.name;
      });

      this.dadosService.guardarDados('generos', this.generos);

    });
  }
}
