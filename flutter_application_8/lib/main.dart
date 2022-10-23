import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Iskele(),
    );
  }
}

class Iskele extends StatefulWidget {
  const Iskele({super.key});

  @override
  State<Iskele> createState() => _IskeleState();
}

class _IskeleState extends State<Iskele> {
  TextEditingController t1 = TextEditingController();
  TextEditingController t2 = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        margin: EdgeInsets.all(50),
        child: Center(
          child: Column(
            children: [
              TextField(controller: t1,),
              TextField(controller: t2,),
              Row(
                children: [
                  ElevatedButton(onPressed: onPressed, child: child),
                  ElevatedButton(onPressed: onPressed, child: child),
                  ElevatedButton(onPressed: onPressed, child: child),
                  ElevatedButton(onPressed: onPressed, child: child),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
