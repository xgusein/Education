import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: "/",
      routes: {
        "/": (context) => GirisEkrani(),
        "/ProfilSayfasiRotasi": (context) => ProfilEkrani(),
      },
    );
  }
}

class GirisEkrani extends StatefulWidget {
  const GirisEkrani({super.key});
  @override
  State<GirisEkrani> createState() => _GirisEkraniState();
}

class _GirisEkraniState extends State<GirisEkrani> {

  TextEditingController t1 = TextEditingController();
  TextEditingController t2 = TextEditingController();

  girisYap() {
    Navigator.pushNamed(context, "/ProfilSayfasiRotasi", arguments: VeriModeli(kullaniciAdi: t1.text, sifre: t2.text));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Giris Ekrani")),
      body: Container(
        child: Column(children: <Widget>[
          TextFormField(controller: t1,),
          TextFormField(controller: t2,),
          ElevatedButton(
            onPressed: girisYap,
            child: Text("Giris Yap"),
          )
        ]),
      ),
    );
  }
}

class ProfilEkrani extends StatefulWidget {
  const ProfilEkrani({super.key});
  @override
  State<ProfilEkrani> createState() => _ProfilEkraniState();
}

class _ProfilEkraniState extends State<ProfilEkrani> {
  cikisYap() {
    Navigator.pop(context, "/");
  }

  @override
  Widget build(BuildContext context) {

    VeriModeli iletilenArgumanlar = ModalRoute.of(context).settings.arguments;

    return Scaffold(
      appBar: AppBar(title: Text("Profil Ekrani")),
      body: Container(
        child: Column(children: <Widget>[
          ElevatedButton(
            onPressed: cikisYap,
            child: Text("Cikis Yap"),
          )
        ]),
      ),
    );
  }
}

class VeriModeli {
  String kullaniciAdi, sifre;
  VeriModeli(this.kullaniciAdi,this.sifre)
}
