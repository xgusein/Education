import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: AnaEkran(),
      ),
    );
  }
}

class AnaEkran extends StatelessWidget {
  AnaEkran({super.key});
  var snackBar = SnackBar(
    content: Text("Messaages were deleted"),
    action: SnackBarAction(
      label: "Geri AL",
      onPressed: () {
        print("Ilme islemi geri alindi");
      },
    ),
  );
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(
        child: ElevatedButton(
          child: Text("Delete"),
          onPressed: () {
            ScaffoldMessenger.of(context).showSnackBar(snackBar);
          },
        ),
      ),
    );
  }
}
