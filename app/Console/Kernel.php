<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected $commands = [
        Commands\pushClinic2Wp::class,
    ];
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('hb:sitemap:clinic')->dailyAt('03:00');
        $schedule->command('hb:sitemap:pract')->dailyAt('04:00');
        $schedule->command('hb:sitemap:condition:service:city')->dailyAt('05:00');

        $schedule->command('hb:sync:clinic:wp-2-portal')->everyMinute();
        $schedule->command('hb:sync:pract:wp-2-portal')->everyMinute();

        $schedule->command('hb:send:pract:create-password')->everyMinute();

        $schedule->command('hb:sync:clinic:portal-2-wp')->everyMinute();
        $schedule->command('hb:sync:pract:portal-2-wp')->everyMinute();
        $schedule->command('hb:pract_table:normalize')->hourly();
        
        $schedule->command('backup:run')->dailyAt('00:00');
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
