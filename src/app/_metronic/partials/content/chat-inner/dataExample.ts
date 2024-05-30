interface MessageModel {
  user: number;
  type: 'in' | 'out';
  text: string;
  time: string;
  template?: boolean;
}
const defaultMessages: Array<MessageModel> = [
  {
    user: 4,
    type: 'in',
    text: '¿Qué tan probable es que recomiendes nuestra empresa a tus amigos y familiares?',
    time: '2 mins',
  },
  {
    user: 2,
    type: 'out',
    text: 'Hola, solo queremos informarte que te has suscrito a un repositorio en GitHub.',
    time: '5 mins',
  },
  {
    user: 4,
    type: 'in',
    text: '¡Ok, entendido!',
    time: '1 Hora',
  },
  {
    user: 2,
    type: 'out',
    text: '¡Recibirás notificaciones para todos los problemas y solicitudes de extracción!',
    time: '2 Horas',
  },
  {
    user: 4,
    type: 'in',
    text: 'Puedes dejar de seguir este repositorio inmediatamente haciendo clic aquí: <a href="https://keenthemes.com">Keenthemes.com</a>',
    time: '3 Horas',
  },
  {
    user: 2,
    type: 'out',
    text: '¡Los cursos de negocios más comprados durante esta oferta!',
    time: '4 Horas',
  },
  {
    user: 4,
    type: 'in',
    text: 'EduLearnIA te brinda apoyo sobre tus dudas',
    time: '5 Horas',
  },
  {
    template: true,
    user: 2,
    type: 'out',
    text: '',
    time: 'Justo ahora',
  },
  {
    template: true,
    user: 4,
    type: 'in',
    text: 'Justo antes de la temporada de vacaciones tenemos el próximo Gran Oferta para ti.',
    time: 'Justo ahora',
  },
];


interface UserInfoModel {
  initials?: {
    label: string;
    state: 'warning' | 'danger' | 'primary' | 'success' | 'info';
  };
  name: string;
  avatar?: string;
  email: string;
  position: string;
  online: boolean;
}

const defaultUserInfos: Array<UserInfoModel> = [
  {
    name: 'Emma Smith',
    avatar: 'avatars/300-6.jpg',
    email: 'e.smith@kpmg.com.au',
    position: 'Art Director',
    online: false,
  },
  {
    name: 'Melody Macy',
    initials: { label: 'M', state: 'danger' },
    email: 'melody@altbox.com',
    position: 'Marketing Analytic',
    online: true,
  },
  {
    name: 'Max Smith',
    avatar: 'avatars/300-1.jpg',
    email: 'max@kt.com',
    position: 'Software Enginer',
    online: false,
  },
  {
    name: 'Sean Bean',
    avatar: 'avatars/300-5.jpg',
    email: 'sean@dellito.com',
    position: 'Web Developer',
    online: false,
  },
  {
    name: 'Brian Cox',
    avatar: 'avatars/300-25.jpg',
    email: 'brian@exchange.com',
    position: 'UI/UX Designer',
    online: false,
  },
  {
    name: 'Mikaela Collins',
    initials: { label: 'M', state: 'warning' },
    email: 'mikaela@pexcom.com',
    position: 'Head Of Marketing',
    online: true,
  },
  {
    name: 'Francis Mitcham',
    avatar: 'avatars/300-9.jpg',
    email: 'f.mitcham@kpmg.com.au',
    position: 'Software Arcitect',
    online: false,
  },

  {
    name: 'Olivia Wild',
    initials: { label: 'O', state: 'danger' },
    email: 'olivia@corpmail.com',
    position: 'System Admin',
    online: true,
  },
  {
    name: 'Neil Owen',
    initials: { label: 'N', state: 'primary' },
    email: 'owen.neil@gmail.com',
    position: 'Account Manager',
    online: true,
  },
  {
    name: 'Dan Wilson',
    avatar: 'avatars/300-23.jpg',
    email: 'dam@consilting.com',
    position: 'Web Desinger',
    online: false,
  },
  {
    name: 'Emma Bold',
    initials: { label: 'E', state: 'danger' },
    email: 'emma@intenso.com',
    position: 'Corporate Finance',
    online: true,
  },
  {
    name: 'Ana Crown',
    avatar: 'avatars/300-12.jpg',
    email: 'ana.cf@limtel.com',
    position: 'Customer Relationship',
    online: false,
  },
  {
    name: 'Robert Doe',
    initials: { label: 'A', state: 'info' },
    email: 'robert@benko.com',
    position: 'Marketing Executive',
    online: true,
  },
  {
    name: 'John Miller',
    avatar: 'avatars/300-13.jpg',
    email: 'miller@mapple.com',
    position: 'Project Manager',
    online: false,
  },
  {
    name: 'Lucy Kunic',
    initials: { label: 'L', state: 'success' },
    email: 'lucy.m@fentech.com',
    position: 'SEO Master',
    online: true,
  },
  {
    name: 'Ethan Wilder',
    avatar: 'avatars/300-21.jpg',
    email: 'ethan@loop.com.au',
    position: 'Accountant',
    online: true,
  },
];

const messageFromClient: MessageModel = {
  user: 4,
  type: 'in',
  text: '¡Gracias por comunicarte con nosotros, ¿en que puedo ayudarte?!',
  time: 'Justo ahora',
};

export {
  MessageModel,
  defaultMessages,
  UserInfoModel,
  defaultUserInfos,
  messageFromClient,
};
