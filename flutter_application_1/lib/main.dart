import "package:flutter/material.dart";

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Ilkel Blok Uygulamasi",
      home: AnaEkran(),
    );
  }
}

class AnaEkran extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Bos Uygulamasi")),
      body: Container(
        child: Center(
          child: Text("Merhaba"),
        ),
      ),
    );
  }
}
