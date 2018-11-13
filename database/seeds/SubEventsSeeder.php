<?php

use Illuminate\Database\Seeder;

class SubEventsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subEvents = [
            0 => [
                'event_id' => '1',
                'title' => 'saturday',
                'fund' => 500000,
                'buy_in' => 10000,
                'date_start' => new \DateTimeImmutable(sprintf('+%d days', 30)),
                'date_end' => new \DateTimeImmutable(sprintf('+%d days', 35)),
                'type' => 'NEW',
                'day' => 1,
                'flight'=> 1,
                'late_reg' => new \DateTimeImmutable(sprintf('+%d days', 35)),
                'clock' => 12

            ],
            1 => [
                'event_id' => '1',
                'title' => 'sunday',
                'fund' => 500000,
                'buy_in' => 10000,
                'date_start' => new \DateTimeImmutable(sprintf('+%d days', 30)),
                'date_end' => new \DateTimeImmutable(sprintf('+%d days', 35)),
                'type' => 'NEW',
                'day' => 1,
                'flight'=> 2,
                'late_reg' => new \DateTimeImmutable(sprintf('+%d days', 35)),
                'clock' => 12
            ],
            2 => [
                'event_id' => '2',
                'title' => 'monday',
                'fund' => 500000,
                'buy_in' => 10000,
                'date_start' => new \DateTimeImmutable(sprintf('+%d days', 30)),
                'date_end' => new \DateTimeImmutable(sprintf('+%d days', 35)),
                'type' => 'NEW',
                'day' => 1,
                'flight'=> 3,
                'late_reg' => new \DateTimeImmutable(sprintf('+%d days', 35)),
                'clock' => 12
            ],
            3 => [
                'event_id' => '2',
                'title' => 'tuesday',
                'fund' => 500000,
                'buy_in' => 10000,
                'date_start' => new \DateTimeImmutable(sprintf('+%d days', 30)),
                'date_end' => new \DateTimeImmutable(sprintf('+%d days', 35)),
                'type' => 'NEW',
                'day' => 1,
                'flight'=> 4,
                'late_reg' => new \DateTimeImmutable(sprintf('+%d days', 35)),
                'clock' => 12
            ],
            4 => [
                'event_id' => '3',
                'title' => 'wednesday',
                'fund' => 500000,
                'buy_in' => 10000,
                'date_start' => new \DateTimeImmutable(sprintf('+%d days', 30)),
                'date_end' => new \DateTimeImmutable(sprintf('+%d days', 35)),
                'type' => 'NEW',
                'day' => 1,
                'flight'=> 5,
                'late_reg' => new \DateTimeImmutable(sprintf('+%d days', 35)),
                'clock' => 12
            ],
            5 => [
                'event_id' => '3',
                'title' => 'mega turbo',
                'fund' => 500000,
                'buy_in' => 10000,
                'date_start' => new \DateTimeImmutable(sprintf('+%d days', 30)),
                'date_end' => new \DateTimeImmutable(sprintf('+%d days', 35)),
                'type' => 'NEW',
                'day' => 1,
                'flight'=> 1,
                'late_reg' => new \DateTimeImmutable(sprintf('+%d days', 35)),
                'clock' => 12
            ],

        ];
        foreach ($subEvents as $subEvent) {
            \App\Models\SubEvent::create([
                'event_id' => $subEvent['event_id'],
                'title' => $subEvent['title'],
                'image_id' => null,
                'fund' => $subEvent['fund'],
                'buy_in' => $subEvent['buy_in'],
                'date_start' => $subEvent['date_start'],
                'date_end' => $subEvent['date_end'],
                'type' => $subEvent['type'],
                'day' => $subEvent['day'],
                'flight'=>$subEvent['flight'],
                'late_reg' =>$subEvent['late_reg'],
                'clock' => $subEvent['clock']
            ]);
        }

    }
}

