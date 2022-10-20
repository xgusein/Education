import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Chat Application",
      home: Iskele(),
    );
  }
}

class Iskele extends StatelessWidget {
  const Iskele({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Chat Appliction"),
      ),
      body: AnaEkran(),
    );
  }
}

class AnaEkran extends StatefulWidget {
  const AnaEkran({super.key});

  @override
  State<AnaEkran> createState() => _AnaEkranState();
}

class _AnaEkranState extends State<AnaEkran> {
  TextEditingController t1 = TextEditingController();
  List<MesajBalonu> mesajListesi = [];

  listeEkle(String gelenMesaj) {
    setState(() {
      MesajBalonu mesajNesnesi = MesajBalonu(mesaj: gelenMesaj);
      mesajListesi.insert(0, mesajNesnesi);
      t1.clear();
    });
  }

  Widget metiGirisAlani() {
    return Container(
      margin: EdgeInsets.all(15),
      child: Row(
        children: <Widget>[
          Flexible(
            child: TextField(
              controller: t1,
            ),
          ),
          IconButton(
            onPressed: () => listeEkle(t1.text),
            icon: Icon(Icons.send),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(children: <Widget>[
        Flexible(
          child: ListView.builder(
              reverse: true,
              itemCount: mesajListesi.length,
              itemBuilder: (context, indeksNumarasi) =>
                  mesajListesi[indeksNumarasi]),
        ),
        Divider(
          thickness: 1,
        ),
        metiGirisAlani(),
      ]),
    );
  }
}

String isim = "Kullanici1";

class MesajBalonu extends StatelessWidget {
  String mesaj;
  MesajBalonu({this.mesaj});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: 15),
      child: Row(children: [
        CircleAvatar(
          child: Text(isim[0]),
        ),
        Column(
          children: [
            Text(isim),
            Text(mesaj),
          ],
        )
      ]),
    );
  }
}
