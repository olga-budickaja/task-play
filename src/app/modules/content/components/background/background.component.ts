import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent implements OnInit {
  circles: any[] = [];
  lines: any[] = [];

  ngOnInit(): void {
    this.generateCircles();
  }

  generateCircles() {
    const numCircles = 40;

    for (let i = 0; i < numCircles; i++) {
      const size = Math.random() * 30 + 10; // Random size between 10 and 40
      const x = Math.random() * 100; // Random x position in percentage
      const y = Math.random() * 100; // Random y position in percentage
      const duration = Math.random() * 5 + 5; // Random duration between 5 and 10 seconds
      const delay = Math.random() * 5; // Random delay between 0 and 5 seconds

      this.circles.push({
        style: {
          width: `${size}px`,
          height: `${size}px`,
          top: `${y}%`,
          left: `${x}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        },
      });

      this.lines.push({
        style: {
          top: `${y}%`,
          left: `${x}%`,
          animationDuration: `${duration}s`,
        },
      });
    }
  }
}
